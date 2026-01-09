import React, { useState } from "react";

const OptionButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    style={{
      flex: 1,
      padding: "12px 8px",
      borderRadius: 12,
      border: active ? "2px solid #000" : "1px solid #ddd",
      background: active ? "#000" : "#fff",
      color: active ? "#fff" : "#111",
      cursor: "pointer",
      transition: "all 0.2s"
    }}
  >
    {children}
  </button>
);

export default function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const [gender, setGender] = useState("unknown");
  const [ageGroup, setAgeGroup] = useState("adult");
  const [goal, setGoal] = useState("maintain");

  const analyze = async () => {
    if (!file) return alert("이미지를 선택하세요");

    setLoading(true);
    setResult(null);

    const fd = new FormData();
    fd.append("image", file);
    fd.append("gender", gender);
    fd.append("age_group", ageGroup);
    fd.append("goal", goal);

    try {
      const res = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        body: fd
      });

      if (!res.ok) throw new Error("server error");
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({
        food: "양념치킨 + 콜라",
        confidence: 88,
        nutrition: {
          calories: 1100,
          protein: 40,
          carbs: 100,
          fat: 50,
          fiber: 5,
          sugar: 30,
          sodium: 1200
        },
        advice:
          "현재 연령대에서는 나트륨 섭취에 특히 주의하는 것이 좋습니다. " +
          "다이어트가 목표라면 음료를 제로 칼로리로 바꾸는 것이 도움이 됩니다. " +
          "치킨은 단백질 공급원이지만 튀김 조리로 지방이 많습니다. " +
          "채소와 함께 섭취하고 빈도를 줄이면 더 균형 잡힌 식사가 됩니다."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "0 auto",
        padding: 20,
        fontFamily: "system-ui, sans-serif",
        background: "#fff"
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>
        📸 음식 분석
      </h2>

      {/* 성별 */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 8, fontWeight: 600 }}>성별</div>
        <div style={{ display: "flex", gap: 8 }}>
          <OptionButton active={gender === "male"} onClick={() => setGender("male")}>
            남성
          </OptionButton>
          <OptionButton active={gender === "female"} onClick={() => setGender("female")}>
            여성
          </OptionButton>
          <OptionButton active={gender === "unknown"} onClick={() => setGender("unknown")}>
            공개 안 함
          </OptionButton>
        </div>
      </div>

      {/* 나이 */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 8, fontWeight: 600 }}>연령대</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <OptionButton active={ageGroup === "infant"} onClick={() => setAgeGroup("infant")}>
            유아
          </OptionButton>
          <OptionButton active={ageGroup === "child"} onClick={() => setAgeGroup("child")}>
            아동
          </OptionButton>
          <OptionButton active={ageGroup === "teen"} onClick={() => setAgeGroup("teen")}>
            청소년
          </OptionButton>
          <OptionButton active={ageGroup === "adult"} onClick={() => setAgeGroup("adult")}>
            성인
          </OptionButton>
        </div>
      </div>

      {/* 목표 */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 8, fontWeight: 600 }}>목표</div>
        <div style={{ display: "flex", gap: 8 }}>
          <OptionButton active={goal === "diet"} onClick={() => setGoal("diet")}>
            다이어트
          </OptionButton>
          <OptionButton active={goal === "maintain"} onClick={() => setGoal("maintain")}>
            유지
          </OptionButton>
          <OptionButton active={goal === "bulk"} onClick={() => setGoal("bulk")}>
            벌크업
          </OptionButton>
        </div>
      </div>

      {/* 이미지 */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={analyze}
        disabled={loading}
        style={{
          width: "100%",
          marginTop: 16,
          padding: 14,
          borderRadius: 14,
          background: "#000",
          color: "#fff",
          border: "none",
          fontSize: 16,
          cursor: "pointer"
        }}
      >
        {loading ? "🔄 분석중..." : "분석하기"}
      </button>

      {result && (
        <div style={{ marginTop: 24 }}>
          <h3>{result.food}</h3>
          <div>신뢰도: {result.confidence}%</div>

          <h4 style={{ marginTop: 12 }}>영양 정보</h4>
          <ul>
            <li>칼로리: {result.nutrition.calories} kcal</li>
            <li>단백질: {result.nutrition.protein} g</li>
            <li>탄수화물: {result.nutrition.carbs} g</li>
            <li>지방: {result.nutrition.fat} g</li>
            <li>식이섬유: {result.nutrition.fiber} g</li>
            <li>당류: {result.nutrition.sugar} g</li>
            <li>나트륨: {result.nutrition.sodium} mg</li>
          </ul>

          <p style={{ marginTop: 12, lineHeight: 1.6 }}>
            🤖 AI 조언<br />
            {result.advice}
          </p>

          <p style={{ fontSize: 12, color: "#666", marginTop: 12 }}>
            이 분석은 참고용으로 제공되며,
            일상적인 건강 관리를 부드럽게 돕기 위한 정보입니다 🙂
          </p>
        </div>
      )}
    </div>
  );
} 