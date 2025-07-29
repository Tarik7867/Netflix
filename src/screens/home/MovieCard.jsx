import React, { memo, useState} from 'react';
import  FavoriteButton  from './FavoriteButton';
import { Modal } from '../../components/ui/modal';
import {Link} from 'react-router-dom'
   

function MovieCard ({image, rating, trailerYoutubeId}){

    const [isOpenTrailer, setIsOpenTrailer] = useState(false)

    return <div className="relative w-[250px] rounded-2xl overflow-hidden bg-neutral-900 shadow-lg " onClick={() => {
        
    }}>

        {isOpenTrailer && (
    <Modal onClose={() =>  setIsOpenTrailer(false)}>
    
    <iframe width="373" height="210" src={`https://www.youtube.com/embed/${trailerYoutubeId}?controls=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

    </Modal>
        )}


        <img   
        src= {image}
         alt="Movie Poster"
         className='w-full h-auto object-cover'
         />

        <div className="flex gap-1 absolute top-2 right-2 z-10">
        <FavoriteButton/>
        <button
            className='btn'
            
            onClick={()=>{
                setIsOpenTrailer(true)
            }}
        >
            🎥
        </button>
        <Link to = {`/movie/${trailerYoutubeId}`} className = 'btn'>
        🔗
        </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 text-sm text-white font-semibold">
            IMDb reting: {rating}
        </div>
       
       
    </div>
}

export default memo(MovieCard)