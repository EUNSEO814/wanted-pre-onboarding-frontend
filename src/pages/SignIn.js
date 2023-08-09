import Button from "../components/Button";
import Input from "../components/Input";

const SignIn = () => {
  return (
    <form>
      <h1>로그인</h1>
      <Input data-testid="email-input" />
      <Input data-testid="password-input" />
      <Button data-testid="signin-button" text="로그인" />
    </form>
  );
};

export default SignIn;
