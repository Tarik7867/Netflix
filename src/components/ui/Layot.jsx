import React from "react"
import { useMemo } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

export function Layot(){
    const {pathname} = useLocation()


const isHomePage = useMemo(() => pathname === '/', [pathname]) 


return (
     <div className="min-h-screen w-full bg-white dark:bg-black dark:text-white text-black ">
        {!isHomePage && (
    <header className='mb-10 flex items-center justify-between absolute'>
        <Link to = "/">
    <img 
        src='/netflix.png'
        alt='Netflix'
        className='h-8 w-auto absolute '
    />
    </Link>
    </header>
  )}
    <Outlet/>
    </div>
)
}