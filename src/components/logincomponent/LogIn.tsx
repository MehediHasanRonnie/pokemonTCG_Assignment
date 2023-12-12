import { useRouter } from "next/router";
import { useState } from "react";
import { useLogin } from "@/customhooks/login";

export const LogIn = () => {
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const router = useRouter();
  const { login } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName == "codecamp" && password == "123") {
      login();
      router.push("/homepage");
    } else {
      alert("You are not allow to SignIn");
    }
    setUserName("");
    setPassword("");
  };
  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className=" border bg-white shadow-lg rounded-md px-8 pt-6 pb-8 mb-4 flex flex-col"
      >
        <h2 className="flex justify-center items-center mb-4 font-bold ">
          SignIn
        </h2>
        <div>
          <label
            htmlFor="userName"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            User Name:
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            id="userName"
            value={userName}
            placeholder="Enter user name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-2 mt-2 text-sm font-medium text-gray-900"
          >
            Password:
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="password"
            id="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center mt-5">
          <button
            className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-200"
            type="submit"
          >
            LogIn
          </button>
        </div>
      </form>
    </div>
  );
};
