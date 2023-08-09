import Button from "../components/Button";
import Input from "../components/Input";

const SignUp = () => {
  return (
    <form>
      <h1>회원가입</h1>
      <Input data-testid="email-input" />
      <Input data-testid="password-input" />
      <Button data-testid="signup-button" text="회원가입" />
    </form>
  );
};

export default SignUp;
