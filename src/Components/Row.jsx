import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'

function Row({title, url}) {


  const [movies, setMovies] = useState([])

  useEffect(()=>{
    axios.get(url).then(res=>setMovies(res.data.results))
  },[url])

  return (
    
  <>
    <h2 className='p-4 font-bold text-xl'>{title}</h2>

      <div className='flex items-center relative'>

      
    <div className='w-full h-full overflow-x-scroll scroll-smooth no-scrollbar whitespace-nowrap'>
        {movies.map((movie)=>{
          return (
            <MovieItem key={movie.id} movie={movie} />
          )
        })}
    </div>
    </div>

  </>
  )
}

export default Row