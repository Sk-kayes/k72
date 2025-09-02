import React from 'react'
import Video from '../components/home/Video'
import TopText from '../components/home/TopText'
import BottomText from '../components/home/BottomText'

const Home = () => {
    return (
        <div>
            <div className='h-screen w-full fixed'>
                <Video />
            </div>
            <div className='h-screen w-full fixed'>
                <TopText />
                <BottomText />
            </div>
        </div>
    )
}

export default Home
