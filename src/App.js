import React, { useEffect, useState } from 'react'
import image from './resources/img.png'

function App() {
  const [ tours, setTours ] = useState([])

  const fetchData = () => {
    fetch('https://course-api.com/react-tours-project')
    .then(response => {
      return response.json()
    })
    .then(data => {
      setTours(data)
      console.log(data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return ( <>
    {tours.map(tour => {
      return <div className='h-128 w-128 bg-white m-auto mt-10 shadow-lg'>
      <img src={tour.image} className='h-80 w-128' />
      <div className='p-7'>
      <p className='flex justify-between pb-5'>
        <span className='text-xl'>
        {tour.name}
        </span>
        <span className='text-xl text-blue-400'>
        $ {tour.price}
        </span>
        </p>
        <p className='text-slate-500'>
        {tour.info}
        </p>
        </div>
    </div>
    })}
    
    </>
  )
}

export default App