import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'

const Body = () => {
    return (
        <>
            <p>Body</p>
            <div className='grid grid-flow-col'>
                <SideBar />
                <MainContainer />
            </div>
        </>
    )
}

export default Body