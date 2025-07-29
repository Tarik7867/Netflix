import React from "react";


const LoginForm = () => {
    return (
      <form className="flex flex-col gap-4">
        <h2 className="text-3xl text-white font-semibold mb-2">Увійти</h2>
        <input
          type="email"
          placeholder="Введіть вашу електронну пошту"
          className="border p-2 rounded outline-none h-14 pl-4 text-white bg-black/70 focus:border-red-600"
        />
        <input
          type="password"
          placeholder="Пароль"
          className="border p-2 rounded outline-none h-14 pl-4 text-white bg-black/70 focus:border-red-600"
        />
        <button
          type="submit"
          className="bg-[#bd0000] text-white py-2 rounded hover:shadow-[0_2px_18px_rgb(255,0,0)] transition duration-700 ease-in-out"
        >
          Увійти
        </button>
      </form>

    );
  };

  export default LoginForm
  