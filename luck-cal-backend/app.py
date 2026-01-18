from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from openai import OpenAI
import base64
import json
import os
import logging

# =====================
# 환경 변수 로드
# =====================
load_dotenv()

OPENAI_API_KEY = os.getenv("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")
if not OPENAI_API_KEY:
    raise RuntimeError("OPENAI_API_KEY 환경변수가 설정되지 않았습니다.")

client = OpenAI(api_key=OPENAI_API_KEY)

logging.basicConfig(level=logging.INFO)

app = FastAPI(title="Luck-Cal AI Backend (Beta)")

# =====================
# CORS 설정
# =====================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =====================
# 권장 칼로리 계산
# =====================
def get_target_cal(age_group: str, gender: str) -> int:
    table = {
        "infant": {"male": 900, "female": 900, "unknown": 900},
        "child": {"male": 1400, "female": 1300, "unknown": 1350},
        "teen": {"male": 2200, "female": 2000, "unknown": 2100},
        "adult": {"male": 2600, "female": 2200, "unknown": 2400},
    }
    return table.get(age_group, table["adult"]).get(gender, 2400)

# =====================
# confidence → 상태 텍스트
# =====================
def confidence_to_text(confidence: int) -> str:
    if confidence >= 80:
        return "확실해요"
    elif confidence >= 60:
        return "추정이에요"
    else:
        return "잘 모르겠어요"

# =====================
# 메인 분석 API
# =====================
@app.post("/analyze")
async def analyze(
    image: UploadFile = File(...),
    age_group: str = Form("adult"),
    gender: str = Form("unknown"),
    goal: str = Form("maintain"),
):
    try:
        # =====================
        # 이미지 base64 변환
        # =====================
        image_bytes = await image.read()
        image_base64 = base64.b64encode(image_bytes).decode("utf-8")

        target_cal = get_target_cal(age_group, gender)

        # =====================
        # 프롬프트 (🔥 reason 추가됨)
        # =====================
        prompt = f"""
너는 실제 서비스에서 사용되는 매우 신중한 AI 음식 분석기다.

❗ 반드시 JSON만 반환
❗ 코드블록 사용 금지
❗ 한국어 사용

[판단 단계]
1. 이 이미지가 음식인지 판단 (is_food)
2. 음식이면 카테고리 분류

[카테고리]
["치킨", "면", "밥", "디저트", "빵", "음료", "기타"]

[신뢰도 규칙]
- confidence: 0~100
- 확신 없으면 낮게 부여

[중요]
- 왜 그렇게 판단했는지 reason을 한 문장으로 설명

[출력 형식]
{{
  "is_food": true/false,
  "category": "카테고리",
  "food": "음식명 또는 null",
  "confidence": 숫자,
  "reason": "판단 이유 한 문장",
  "food_candidates": [
    {{ "name": "후보1", "confidence": 숫자 }},
    {{ "name": "후보2", "confidence": 숫자 }}
  ],
  "nutrition": {{
    "calories": 숫자,
    "protein": 숫자,
    "carbs": 숫자,
    "fat": 숫자,
    "fiber": 숫자,
    "sugar": 숫자,
    "sodium": 숫자
  }},
  "advice": "짧은 건강 조언"
}}
"""

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
                            },
                        },
                    ],
                }
            ],
            temperature=0.3,
        )

        raw = response.choices[0].message.content.strip()
        logging.info(f"AI RAW RESPONSE: {raw}")

        result = json.loads(raw)

        # =====================
        # 🔥 베타 핵심 후처리
        # =====================
        confidence = int(result.get("confidence", 0))
        is_food = result.get("is_food", False)

        if not is_food:
            return {
                "status": "not_food",
                "message": "음식이 아닌 것 같아요. 음식 사진을 업로드해 주세요."
            }

        result["confidence_text"] = confidence_to_text(confidence)

        if confidence < 60:
            result["status"] = "uncertain"
            result["warning"] = "❗ 정확한 판단이 어려워요"
            result["retry_guide"] = (
                "밝은 곳에서 음식 전체가 나오게 다시 촬영하면 "
                "더 정확하게 분석할 수 있어요."
            )

        elif confidence < 80:
            result["status"] = "warning"
            result["warning"] = "⚠️ 추정 결과입니다. 실제와 다를 수 있어요."

        else:
            result["status"] = "clear"

        return result

    except Exception as e:
        logging.error(f"Analyze Error: {str(e)}")
        return {
            "status": "error",
            "food": None,
            "confidence": 0,
            "message": "AI 분석 중 오류가 발생했습니다. 다른 이미지를 사용해 주세요."
        }

# =====================
# 헬스 체크
# =====================
@app.get("/")
def health():
    return {"status": "ok"}
