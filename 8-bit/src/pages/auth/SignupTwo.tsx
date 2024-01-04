import styled from "@emotion/styled";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`;

const NickNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;


const Logo = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  margin-top : 3%;
  margin-bottom : 5%;

  img {
    width : 187px;
    height : 49px;
    margin-bottom : 5%;
  }
`;

const Input = styled.input`
  width : 400px;
  height: 40px;
  border-radius : 7px;
  border : 1px solid #ccc;
`;

const SignUpForm = styled.form`
  padding : 20px;
  background : white;
`;

const Button = styled.button`
  height: 37px;
  border: 1px solid #CCCCCC;
  background-color : #F3F3F3;
  color : #808080;
  border-radius : 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.overlapCheck {
    width: 80px;
    height: 40px;
    background-color : white;
    border : 1px solid blue;
    color : blue;
    text-align: center;
  }
  &.nextButton {
    background-color : #337AFF;
    color : white;
    width: 217px;
    height: 56px;
    border : none;
    margin-top : 50px;
  }
  &.previousButton {
    border : 1px solid blue;
    background-color : white;
    color : blue;
    width: 217px;
    height: 56px;
    margin-top: 50px;
    margin-right: 50px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 498px;
  margin-bottom: 50px;
`;

const StyledAddIcon = styled(AddIcon)`
  width: 16px;
  height: 16px;
  margin-left: 3px;
`;

const CheckboxLabel = styled.label`
  display: flex;
`;


function SignupTwo() {

  const navigate = useNavigate();


  return (
    <Container>
      <Logo>
        <img src="/logo.svg" alt="로고이미지" />
        <h4>회원가입 하고 모든 레퍼런스를 모아보세요.</h4>
      </Logo>
      <SignUpForm>
        <p>닉네임</p>
        <NickNameContainer>
          <Input 
            type="text"
            placeholder="닉네임" 
          />
          <Button className="overlapCheck"type="submit">확인</Button>
        </NickNameContainer>

        <p>관심분야</p>
        <ButtonContainer>
          <Button type="submit">서비스 기획 <StyledAddIcon /></Button>
          <Button type="submit">UI/UX <StyledAddIcon /></Button>
          <Button type="submit">영상/모션그래픽 <StyledAddIcon /></Button>
          <Button type="submit">편집 디자인 <StyledAddIcon /></Button>
          <Button type="submit">타이포그래피 <StyledAddIcon /></Button>
        </ButtonContainer>

          <p>제안 허용</p>
          <CheckboxLabel>
            <input type="checkbox" /> 채용 제안
            <input type="checkbox" /> 의견 제안
            <input type="checkbox" /> 프로젝트 제안
          </CheckboxLabel>

          <ButtonContainer>
            <Button 
              onClick={() => {navigate("/signup");}}
              className="previousButton" 
              type="submit">이전</Button>
            <Button 
              onClick={() => {navigate("/signupSuccess");}}
              className="nextButton" 
              type="submit">다음</Button>
          </ButtonContainer>
        
      </SignUpForm>

    </Container>
  );
}

export default SignupTwo;


