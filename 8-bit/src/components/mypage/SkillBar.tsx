import styled from "@emotion/styled";
import { Common } from "../../styles/common";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

const SkillBars = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillName = styled.p``;

function SkillBar({ label, value }: { label: string; value: number }) {
  // value는 0 ~ 100 사이의 숫자입니다.
  // 여기서 value는 숙련도 수준을 퍼센트로 나타냅니다.

  const normaliseValue = (value: number) => {
    // 상(100), 중(50), 하(25) 수준에 따라 색상을 정의할 수 있습니다.
    if (value >= 75) {
      return Common.colors.primary[150]; // 상
    } else if (value >= 50) {
      return Common.colors.primary[100]; // 중
    } else {
      return Common.colors.primary[50]; // 하
    }
  };

  return (
    <>
      <SkillName>{label}</SkillName>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 10,
          borderRadius: 5,
          [`& .MuiLinearProgress-bar`]: {
            backgroundColor: normaliseValue(value),
          },
        }}
      />
      <Typography variant="body2" color="textSecondary">{`${Math.round(
        value
      )}%`}</Typography>
    </>
  );
}

export default function SkillsList() {
  // 예시로 몇 가지 기술을 정의합니다.
  const skills = [
    { name: "피그마", level: 80 },
    { name: "포토샵", level: 70 },
    { name: "일러스트", level: 30 },
  ];

  return (
    <SkillBars>
      {skills.map((skill, index) => (
        <SkillBar key={index} label={skill.name} value={skill.level} />
      ))}
    </SkillBars>
  );
}
