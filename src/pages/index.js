import React, { useState } from 'react'
import HeroSection from '../component/HeroSection';
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'

const Home = () => {
    const [isOpen, setisOpen] = useState(false);
    const toggle=()=>{
        setisOpen(!isOpen)
    }
    
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}  ></Navbar>
        <HeroSection>   </HeroSection>
        </>    )
}

export default Home
