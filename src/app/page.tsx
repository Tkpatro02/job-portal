import Image from "next/image";
import Hero from "@/app/components/Hero";
import Jobs from "@/app/components/Jobs";
import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
  signOut,
} from "@workos-inc/authkit-nextjs";

export default async function Home() {
  // const { user } = await getUser();

  // Get the URL to redirect the user to AuthKit to sign in
  const signInUrl = await getSignInUrl();

  // Get the URL to redirect the user to AuthKit to sign up
  const signUpUrl = await getSignUpUrl();
  return (
    <div className="space-y-8">
      <Hero />
      <Jobs />
    </div>
  );
}
