import { logIn } from "./firebase";

export default function Login() {
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://i.pinimg.com/originals/26/0e/26/260e26a01c33fe8c726ffa20fd6809e1.jpg"
          alt="logo"
        />
      </div>
      <button onClick={logIn}>Log in</button>
    </div>
  );
}
