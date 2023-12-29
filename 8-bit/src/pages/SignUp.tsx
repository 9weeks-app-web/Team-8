import styled from "@emotion/styled";
import app from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const SignUpForm = styled.form`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('유저 정보 :', userCredential.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <SignUpForm onSubmit={signup}>
        <Input type="text" placeholder="Username" />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Input type="password" placeholder="Confirm Password" />
        <Button type="submit">Sign Up</Button>
      </SignUpForm>
    </Container>
  );
}

export default SignUp;
