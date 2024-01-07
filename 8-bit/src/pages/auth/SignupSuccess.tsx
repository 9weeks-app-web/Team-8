import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Common } from "../../styles/common";

const Container = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;

  p {
    font-size : 16px;
    color: #808080;
  }
`;

const Logo = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  margin-top: 43px;

  img {
    width : 187px;
    height : 49px;
    margin-bottom: 131px;
  }
`;

const SuccessIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 16px;

`;

const Button = styled.button`
  background-color: #337AFF;
  color: #FFFFFF;
  border: none;
  border-radius : 12px;
  width: 217px;
  height: 56px;
  margin-top: 80px;
  margin-bottom: 326px;
`;

const H1 = styled.h1`
  font-size: 34px;
  font-weight: ${Common.font.weight.semibold};
  margin-bottom: 40px;
`;

function SignupSuccess() {

  const storedNicknames = JSON.parse(localStorage.getItem('nicknames') || '[]');
  const nickname = storedNicknames[storedNicknames.length - 1] || '';

  const navigate = useNavigate();

  return (
    <Container>
      <Logo>
        <img src="/auth/logo.svg" alt="로고이미지" />
      </Logo>

      <SuccessIcon src="/auth/signupsuccessicon.png" alt="회원가입성공 아이콘" />
      <H1>회원가입 완료</H1>
        
      <p>{nickname}님, 환영합니다:)</p>
      <p>이제 다양한 레퍼런스를 모아볼수 있어요!</p>

      <Button onClick = {() => {
        navigate("/");
      }}type="submit">시작하기</Button>
    </Container>
  );
}

export default SignupSuccess;

