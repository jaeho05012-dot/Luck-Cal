from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
import openai
import base64
import os
import json

# OpenAI API 키
openai.api_key = os.getenv("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")

app = FastAPI()

# CORS (Vercel 프론트 허용)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 배포 후엔 Vercel 주소로 제한 추천
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def image_to_base64(file: UploadFile):
    return base64.b64encode(file.file.read()).decode("utf-8")

@app.post("/analyze")
async def analyze_food(
    image: UploadFile = File(...),
    gender: str = Form(...),
    age_group: str = Form(...),
    goal: str = Form(...),
    meal_time: str = Form(...)
):
    img_base64 = image_to_base64(image)

    prompt = f"""
너는 음식 사진을 분석하는 영양 AI다.

1️⃣ 음식 이름 하나로 명확히 말해라
2️⃣ 영양소는 현실적인 수치
3️⃣ JSON 형식으로만 응답

응답 형식:
{{
  "food": "",
  "confidence": 0~100,
  "nutrition": {{
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "sugar": 0,
    "sodium": 0
  }},
  "advice": ""
}}

사용자 정보:
- 성별: {gender}
- 연령대: {age_group}
- 목표: {goal}
- 식사 시간: {meal_time}
"""

    response = openai.ChatCompletion.create(
        model="gpt-4o",
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": prompt},
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/jpeg;base64,{img_base64}"
                        }
                    }
                ]
            }
        ],
        max_tokens=500
    )

    # GPT 응답 JSON 파싱
    content = response.choices[0].message.content
    data = json.loads(content)

    return data
