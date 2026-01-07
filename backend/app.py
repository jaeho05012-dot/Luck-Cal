from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import base64
import json
import os
from openai import OpenAI
from dotenv import load_dotenv

# 🔁 .env 파일 로드
load_dotenv()

# 🔑 실제 API 키 사용
client = OpenAI(api_key=os.getenv("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"))

app = FastAPI()

# ✅ CORS 설정 (프론트엔드 연결용)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔹 연령·성별 기준 권장 칼로리 함수
def get_target_cal(age_group: str, gender: str):
    table = {
        "infant": {"male": 900, "female": 900, "unknown": 900},
        "child": {"male": 1400, "female": 1300, "unknown": 1350},
        "teen": {"male": 2200, "female": 2000, "unknown": 2100},
        "adult": {"male": 2600, "female": 2200, "unknown": 2400},
    }
    return table.get(age_group, table["adult"]).get(gender, 2400)


@app.post("/analyze")
async def analyze(
    image: UploadFile = File(...),

    # 1️⃣ 나이 그룹
    age_group: str = Form("adult"),  # infant / child / teen / adult

    # 2️⃣ 성별
    gender: str = Form("unknown"),   # male / female / unknown

    # 3️⃣ 목표
    goal: str = Form("maintain"),    # diet / maintain / bulk
):
    # 📷 이미지 읽기
    image_bytes = await image.read()
    image_base64 = base64.b64encode(image_bytes).decode()

    target_cal = get_target_cal(age_group, gender)

    # 📝 한국어 표시용 텍스트 변환
    age_text = {
        "infant": "유아기",
        "child": "아동기",
        "teen": "청소년기",
        "adult": "성인"
    }.get(age_group, "성인")

    gender_text = {
        "male": "남성",
        "female": "여성",
        "unknown": "성별 평균"
    }.get(gender, "성별 평균")

    goal_text = {
        "diet": "다이어트",
        "maintain": "체중 유지",
        "bulk": "벌크업"
    }.get(goal, "체중 유지")

    # 🤖 AI에게 줄 프롬프트
    prompt = f"""
너는 신뢰도 높은 AI 영양 코치다.

❗ 반드시 JSON만 반환
❗ ```json ``` 절대 사용 금지
❗ 한국어로 작성
❗ 신뢰도는 입력 이미지 기반으로 현실적인 값

[조언 작성 규칙]
1️⃣ {age_text} / {gender_text} 기준 조언 (1~2문장)
2️⃣ {goal_text} 목표에 맞는 조언 (1~2문장)
3️⃣ 음식 자체에 대한 조언 (3~4문장)

[참고 기준]
- 권장 열량: 약 {target_cal} kcal

[출력 형식]
{{
  "food": "음식명",
  "confidence": 0~100,
  "nutrition": {{
    "calories": 숫자,
    "protein": 숫자,
    "carbs": 숫자,
    "fat": 숫자,
    "fiber": 숫자,
    "sugar": 숫자,
    "sodium": 숫자
  }},
  "advice": "자연스러운 문단 형식 조언"
}}
"""

    try:
        # 🔁 OpenAI 호출
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": prompt},
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/jpeg;base64,{image_base64}"
                            }
                        }
                    ]
                }
            ]
        )

        content = response.choices[0].message.content

        # 🟢 문자열 응답을 안전하게 JSON 파싱
        return json.loads(content)

    except Exception as e:
        # ❌ AI 응답이나 파싱 실패 시 기본 처리
        return {
            "food": "알 수 없음",
            "confidence": 0,
            "nutrition": None,
            "advice": "AI 분석 중 오류가 발생했습니다. 다른 이미지를 사용해 주세요."
        }
