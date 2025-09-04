import React from 'react'
import Video from '../components/home/Video'
import TopText from '../components/home/TopText'
import BottomText from '../components/home/BottomText'

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <div className='h-screen w-screen fixed'>
                <Video />
            </div>
            <div className='h-screen w-screen relative flex flex-col justify-between items-center'>
                <TopText />
                <BottomText />
            </div>
        </div>
    )
}

export default Home
