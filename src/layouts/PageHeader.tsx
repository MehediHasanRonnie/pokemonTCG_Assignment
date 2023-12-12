import Link from "next/link";
import { useRouter } from "next/router";
import { useLogin } from "@/customhooks/login";
import useStore from "@/customhooks/countcart";

export const PageHeader = () => {
  const router = useRouter();
  const { isLogIn, logout } = useLogin();
  const { count } = useStore();
  return (
    <nav className="bg-gray-100 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/homepage"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            POKEMON
          </span>
        </Link>
        <div className="flex items-center gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {!isLogIn ? "" : <p>CodeCamp</p>}
          <Link
            href="/cart"
            className="flex py-2.5 px-5 mr-5 text-white bg-slate-700 rounded md:bg-transparent md:text-slate-700 md:p-0 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 100 100"
              id="shopping"
            >
              <g>
                <path d="M86 32H67.9c-1-9-8.6-16-17.9-16s-16.9 7-17.9 16H14c-1.1 0-2 .9-2 2v48c0 1.1.9 2 2 2h72c1.1 0 2-.9 2-2V34c0-1.1-.9-2-2-2zM66 46c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM50 20c7 0 12.9 5.2 13.8 12H36.2c.9-6.8 6.8-12 13.8-12zM34 46c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm50 34H16V36h16v6.3c-2.3.8-4 3-4 5.7 0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.6-1.7-4.8-4-5.7V36h28v6.3c-2.3.8-4 3-4 5.7 0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.6-1.7-4.8-4-5.7V36h16v44z"></path>
              </g>
              <g>
                <path
                  fill="#00F"
                  d="M244-930V754h-1784V-930H244m8-8h-1800V762H252V-938z"
                ></path>
              </g>
            </svg>
            <span>{count}</span>
          </Link>
          <Link href="/login">
            <div className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-200">
              {isLogIn && (
                <div className="flex gap-5">
                  <button onClick={() => logout()}>Logout</button>
                </div>
              )}
              {!isLogIn && (
                <button onClick={() => router.push("/login")}>Login</button>
              )}
            </div>
          </Link>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
