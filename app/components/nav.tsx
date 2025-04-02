import Link from "next/link";
import { useRouter } from "next/navigation";
import Session from 'supertokens-web-js/recipe/session';

export default function Nav() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear user session (modify as needed based on auth system)
    //Do we want to use supertoken Session.signOut(); 
    // localStorage.removeItem("userToken"); 
    // router.push("/login");

    //https://supertokens.com/docs/post-authentication/session-management/session-invalidation
    async function supertokenLogOut(){
      await Session.signOut(); 
      router.push("login"); 

    }
    supertokenLogOut();
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Habit Tracker
          </Link>
          <Link href="/profile" className="text-gray-700 hover:text-blue-500 transition">
            Profile
          </Link>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}