import React from 'react'; 
import { useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { useTheme } from '../../hooks/useTheme';
import  MovieCard  from './MovieCard';
import { MOVIES } from './movies.data';
import LoginModal from '../../components/ui/LoginModal'
import { useNavigate } from 'react-router-dom';



function App() {
  const {theme, toggleTheme} = useTheme()
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)
  
  
  
  const navigate = useNavigate()

 
  const movies = MOVIES.filter(movie => 
    movie.name.toLowerCase().includes(debouncedSearch.toLowerCase()))
  
 
  
  return (
    
    
    <>
  <div class="relative w-full h-screen">
  <img src='/netflix.png'
      alt='Netflix'
      className='absolute h-12 w-auto z-20 px-72 mt-7'
      />
    <button className='signbtn w-20 h-8 absolute top-7 right-80 z-20 rounded pointer bg-[#bd0000] transition duration-700 ease-in-out hover:shadow-[0_2px_18px_rgb(255,0,0)]' style={{ backgroundColor: '#ff0000'}}  onClick={() => navigate('/login')}>Увійти</button>
    
  <img src="/films.jpg" class="absolute w-full h-full object-cover" />
  <div class="absolute w-full h-full bg-black opacity-85"></div>
  <div className="relative z-10 text-white flex flex-col justify-start items-center h-full text-center px-4 pt-72">
    <h1 className="text-5xl md:text-7xl font-bold mb-4 w-2/5">Фільми, серіали й інший контент без обмежень</h1>
    <h2 className='relative md:text-xl mb-4 w-1/2'>Готові до перегляду? Введіть адресу електронної пошти, щоб оформити або поновити підписку.</h2>
   <div className='flex gap-3 '>
    <input type="email" className='inpemail' placeholder='Введіть вашу електронну пошту' />
    <button 
    className='btnemail'>Почати ➡</button>

    </div>
    <svg viewBox="0 0 1440 150" className="relative w-full  h-auto -bottom-48 pointer-events-none">
  <defs>
    
    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#f5f5f5" />
    </linearGradient>

    
    <filter id="shadow" x="-50%" y="-50%" width="150%" height="200%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="red" flood-opacity="0.9" />
    </filter>

   
    <linearGradient id="edgeFade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="white" stop-opacity="0" />
      <stop offset="35%" stop-color="white" stop-opacity="1" />
      <stop offset="65%" stop-color="white" stop-opacity="1" />
      <stop offset="100%" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <mask id="fadeMask">
      <rect width="1440" height="150" fill="url(#edgeFade)" />
    </mask>
  </defs>

  <path 
    d="M0,70 C420,0 960,0 1440,70" 
    stroke="red" 
    stroke-width="3" 
    fill="none"
    filter="url(#shadow)"
    mask="url(#fadeMask)"
  />
</svg>
</div>
   
   
    

</div>




    <div className="min-h-screen w-full bg-white dark:bg-black dark:text-white text-black mt-6 px-6 ">
    

     <header className='mb-10 flex items-center justify-between'>
     <p className='text-3xl text-red-600'>Популярне зараз</p>

    <div>

   
      <input type="search"
        value={searchTerm}
       className='border border-black/15 dark:border-white/15  px-2 py-1 rounded outline-0'
        placeholder='Search...' 
         onChange={e => { setSearchTerm(e.target.value)}}/>
    
      <button
      onClick={toggleTheme}
      className= "text-sm px-3 py-1 rounded border border-white/20 dark:border-white/10 hover:bg-white hover:text-black dark:hover:bg-white/10 transition w-20 m-1">
        {theme === 'dark' ? 'Light☀️' : 'Dark🌙'}
      </button>
    </div>
   </header>
   <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
    { movies.length ? movies.map(movie => (
        <MovieCard 
        key={movie.name}
        image={movie.image} 
        rating={movie.rating}
        trailerYoutubeId={movie.trailerYoutubeId}
      />
    )) : <p>Movies not found....</p>}
     
      </main>
 </div>

      <footer className='flex w-full h-full   text-gray-300 py-10 px-20 mt-32 '>
        <div className='flex w-full h-40 justify-between text-lg'>

                  <ul className="space-y-2">
                <li>Поширені запитання</li>
                <li>Зв’язки з інвесторами</li>
                <li>Конфіденційність</li>
                <li>Перевірка швидкості</li>
              </ul>

              <ul className="space-y-2">
                <li>Довідковий центр</li>
                <li>Вакансії</li>
                <li>Налаштування файлів cookie</li>
                <li>Юридичні повідомлення</li>
              </ul>

              <ul className="space-y-2">
                <li>Обліковий запис</li>
                <li>Способи перегляду</li>
                <li>Корпоративна інформація</li>
                <li>Тільки на Netflix</li>
              </ul>

              <ul className="space-y-2">
                <li>Медіацентр</li>
                <li>Умови використання</li>
                <li>Зв’язатися з нами</li>
              </ul>
        </div>
      </footer>
      
    </>
  )
}

export default App;
