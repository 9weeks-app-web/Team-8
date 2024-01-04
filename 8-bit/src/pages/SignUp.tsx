import styled from "@emotion/styled";
import app from '../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";

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
  width : 400px;
`;

const EmailContainer = styled.div`
  display : flex;
  align-items : center;
  width : 100%;

  p {
    margin-right : 5px;
  }
`;

const PhoneAuthContainer = styled.div`
  display : flex;
  align-items : center;
  width : 100%;

  select {
    margin-right : 5px;
  }

  button {
    margin-left : 5px;
  }
`;

const Input = styled.input`
  width : 100%;
  padding : 10px;
  border-radius : 4px;
  border : 1px solid #ccc;
  box-sizing : border-box;
  margin-bottom : 5%;
`;

const Button = styled.button`
  width : 100%;
  padding : 10px;
  border : none;
  background-color : #007bff;
  color : white;
  border-radius : 4px;
  cursor : pointer;

  &:hover {
    background-color : #0056b3;
  }
`;

const ButtonContainer = styled.div`
  display : flex;
  justify-content : space-between;
  width : 100%;
  gap : 10px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

function SignUp() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
        <EmailContainer>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
          />
          <span>@</span>
          <select>
            <option value="naver.com">naver.com</option>
            <option value="gmail.com">gmail.com</option>
            <option value="hanmail.net">hanmail.net</option>
            <option value="type">직접 입력</option>
          </select>
        </EmailContainer>
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
        <PhoneAuthContainer>
          <select>
            <option value="skt">SKT</option>
            <option value="kt">KT</option>
            <option value="lgu+">LGU+</option>
            <option value="skt_thrifty">SKT 알뜰폰</option>
            <option value="kt_thrifty">KT 알뜰폰</option>
            <option value="lgu+_thrifty">LGU+ 알뜰폰</option>
          </select>
          <Input 
            type="text" 
            placeholder="휴대폰 번호" 
          />
          <button type="submit">인증 요청</button>
        </PhoneAuthContainer>
        <p>인증번호 입력</p>
        <PhoneAuthContainer>
          <Input 
            type="text" 
            placeholder="인증번호" 
          />
          <button type="submit">인증 확인</button>
        </PhoneAuthContainer>
        
        <CheckboxLabel>
          <input type="checkbox" /> 본인인증 약관 전체동의(필수)
          <input type="checkbox" /> 개인정보 수집 이용 동의
          <input type="checkbox" /> 고유식별 정보처리 동의
          <input type="checkbox" /> 통신사 이용약관 동의
        </CheckboxLabel>

        <Button type="submit">회원가입{/*테스트용 버튼*/}</Button> 
        <ButtonContainer>
          <Button type="submit">이전</Button>
          <Button type="submit">다음</Button>
        </ButtonContainer>
      </SignUpForm>
    </Container>
  );
}

export default SignUp;
