import styled from "@emotion/styled";
import app from '../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`;

const Logo = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  margin-top : 3%;

  img {
    width : 187px;
    height : 49px;
    margin-bottom : 5%;
  }
`;

const SignUpForm = styled.form`
  padding : 20px;
  background : white;
  margin-left: 5%;

  &.inputSeleteWrapper {
    display: flex;
  }
`;
const EmailContainer = styled.div`
  display : flex;

  span {
    margin: 5px 5px 20px 5px;
  }

  input {
    width: 156px;
  }

  select {
    width: 152px;
    height: 40px;
  }
`;

const PhoneRequest = styled.div`

  display: flex;
  align-items: flex-start;
  gap: 10px;

  select.phoneSelect {
    width: 78px;
    border: 1px solid #ccc;
    border-radius: 7px;
  }

  input {
    width: 314px;
  }

  button.certifiedRequest {
    height: 40px;
    padding: 10px 20px;
    border: 1px solid blue;
    background-color: white;
    color: blue;
    border-radius: 10px;
  }
`;

const CertifiedCheck = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  input {
    width: 400px;
  }
`;

const Input = styled.input`
  width : 400px;
  height: 40px;
  padding : 10px;
  border-radius : 7px;
  border : 1px solid #ccc;
  box-sizing : border-box;
  margin-bottom : 5%;
`;

const ButtonContainer = styled.div`
  display : flex;
  justify-content : space-between;
  width : 100%;
  gap : 10px;
`;

const Button = styled.button`
  width : 100%;
  padding : 10px;
  border : 1px solid blue;
  background-color : white;
  color : blue;
  border-radius : 10px;

  &.nextButton {
    background-color : #337AFF;
    color : white;
    width: 217px;
    height: 56px;
    border : none;
    margin-top : 20px;
  }
  &.previousButton {
    width: 217px;
    height: 56px;
    margin-top: 20px;
  }
  &.certifiedRequest {
    width: 95px;
    height: 40px;
  }
  &.certifiedCheck {
    width: 95px;
    height: 40px;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content : center;
  margin-bottom: 5px;
  margin-left: 5%;

  .phoneAgree {
    margin-right : 3%;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 7px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

function SignUp() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      if (userCredential.user) {
        await updateProfile(userCredential.user, { displayName: name });
        console.log(userCredential.user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Logo>
        <img src="/logo.svg" alt="로고이미지" />
        <h4>회원가입 하고 모든 레퍼런스를 모아보세요.</h4>
      </Logo>
      <SignUpForm onSubmit={signup}>
        <p>이름</p>
        <Input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름 입력중..." 
        />
        <p>이메일</p>
        <div className="inputSeleteWrapper">
          <EmailContainer>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력하세요"
            />
            <span>@</span>
            <Select>
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="type">직접 입력</option>
            </Select>
          </EmailContainer>
        </div>
        <p>비밀번호</p>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        <p>비밀번호 확인</p>
        <Input 
          type="password" 
          placeholder="비밀번호 확인" 
        />
        <p>휴대폰 인증</p>
        <PhoneRequest>
          <Select className="phoneSelect">
            <option value="skt">SKT</option>
            <option value="kt">KT</option>
            <option value="lgu+">LGU+</option>
            <option value="skt_thrifty">SKT 알뜰폰</option>
            <option value="kt_thrifty">KT 알뜰폰</option>
            <option value="lgu+_thrifty">LGU+ 알뜰폰</option>
          </Select>
          <Input 
            type="text" 
            placeholder="휴대폰 번호" 
          />
        <Button className="certifiedRequest"type="submit">인증 요청</Button>
        </PhoneRequest>
        <p>인증번호 입력</p>
        <CertifiedCheck>
          <Input 
            type="text" 
            placeholder="인증번호" 
          />
          <Button className="certifiedCheck" type="submit">인증 확인</Button>
        </CertifiedCheck>

          <CheckboxLabel>
            <input type="checkbox" /> 본인인증 약관 전체동의(필수)
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> 개인정보 수집이용 동의
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> 고유식별 정보처리 동의
          </CheckboxLabel>
          <CheckboxLabel>
            <div className="phoneAgree">
              <input type="checkbox" /> 통신사 이용약관 동의
            </div>
          </CheckboxLabel>


        <ButtonContainer>
          <Button className="previousButton" type="submit">이전</Button>
          <Button 
            onClick={() => {navigate("/signupTwo");}}
            className="nextButton" 
            type="submit">다음</Button>
        </ButtonContainer>
        <Button style={{ marginTop: '20px' }} type="submit">회원가입 테스트 {/*테스트 버튼*/}</Button>
      </SignUpForm>
    </Container>
  );
}

export default SignUp;
