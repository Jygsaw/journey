import { SignupForm } from "./SignupForm";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for an account",
};

export default function Page() {
  return (
    <main>
      <h1>Register User</h1>
      <br />
      <SignupForm />
    </main>
  );
}
