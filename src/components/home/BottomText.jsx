import React from 'react'
import { Link } from 'react-router-dom'
import Projects from '../../pages/Projects'
import Agence from '../../pages/Agence'

const BottomText = () => {
  return (
    <div className='font-[font2] text-white flex gap-4 text-[72px] uppercase'>
      <Link to="/projects" className='px-4 leading-tight border-2 border-white flex items-center justify-center rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50]'>Projects</Link>
      <Link to="/agence" className='px-4 leading-tight border-2 border-white flex items-center justify-center rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50]'>Agence</Link>
    </div>
  )
}

export default BottomText
