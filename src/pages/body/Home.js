import React from 'react'
import './Home.css'
import PublicIcon from '@material-ui/icons/Public';
import Navbar from '../header/Navbar';
import VideoCard from './ImageCard';

function Home() {
    return (
        <div className="home">
        <Navbar/>
        
        <div className="title">
        <h1> Best  Beer Shop In The World  </h1>
        <PublicIcon className="world"/>

        </div>
       <button>Buy Now </button>
        
           
        </div>
    )
}

export default Home

