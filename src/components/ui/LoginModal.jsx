import React from 'react'
import LoginForm from '../../screens/admin/LoginForm.jsx'



export default function LoginModal({ onClose }) {
  return (
    <div class="relative w-full h-screen"> 
   <img src="/films.jpg" class="absolute w-full h-full object-cover" />
 
    <div className="h-full flex items-center justify-center text-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-[100%] h-[550px] max-w-md bg-black/60 text-black pt-10 p-6 rounded-xl shadow-lg">
        <button
          onClick={() => window.history.back()}  
          className="absolute flex justify-center w-7 top-2 right-3 text-xl bg-[#bd0000]  text-white hover:text-black rounded-[50%]"
        >
          &times;
        </button>
        <LoginForm />

    

        <p className='mt-3 text-white hover:text-gray-400 ease-in-out duration-700'>Забули пароль?</p>
        <div className='flex items-center justify-items-start gap-4 ml-5 mt-4'>
        <input id="check" type="checkbox" class="custom-checkbox" />
        <label className='text-gray-300'>Запам’ятати мене</label>
        </div>
        <div className='flex text-start mb-0 mt-3 ml-5 flex-col text-gray-300'>
        <p className=''>Не користувалися Netflix раніше?</p>
        <p className='m-0 p-0 font-bold text-white cursor-pointer'>Зареєструйтеся просто зараз.</p>
        </div>
          <div className='flex text-start mb-0 mt-3 ml-5 flex-col text-sm'>
          <p className='text-gray-400'>Щоб переконатися, що ви не бот, сторінка захищена системою Google reCAPTCHA.</p>
          </div>
      </div>
    </div>
    </div>
  )
}
