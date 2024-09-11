import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
  signOut,
} from "@workos-inc/authkit-nextjs";
import Link from "next/link";

export default async function Header() {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();

  return (
    <header>
      <div className="container flex items-center justify-between mx-auto my-4">
        <Link href={"/"} className="font-bold text-xl">
          Job-Board
        </Link>
        <nav className="flex gap-4 ">
          {!user && (
            <>
              <Link
                className="rounded-md bg-gray-200 py-2 px-4"
                href={signInUrl}
              >
                Login
              </Link>
            </>
          )}
          {user && (
            <>
              <Link
                className=" rounded-md bg-blue-600 text-white py-2 px-4"
                href={"/new-listing"}
              >
                Post a Job
              </Link>
              <form
                method="POST"
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button
                  type="submit"
                  className="rounded-md bg-gray-200 py-2 px-4"
                >
                  LogOut
                </button>
              </form>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
