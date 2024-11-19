import SignIn from "@/components/sing-in";
import GoogleSignIn from "@/components/google-sign-in";
export default async function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p className="text-5xl">Hello </p>
      <SignIn />
      <GoogleSignIn />
    </div>
  );
}
