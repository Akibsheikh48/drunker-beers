import React from 'react'
import Image from './Image'
import './ImageCard.css'
function ImageCard() {
    return (
        <div className="ImageCard">
            <h2>Drink & Beers</h2>
            <div className="Images">
            
                <Image image="https://s3-ap-southeast-1.amazonaws.com/he-public-data/csm_01_02-2019_Beer_Brewing_53ef2818e58285158.png"
                 title="Pub Beer"
               
                />
                
                 <Image image="https://s3-ap-southeast-1.amazonaws.com/he-public-data/Swedish_beerb2d62a0.jpg"
                 title="Devils Cup"
                />
                 <Image image="https://s3-ap-southeast-1.amazonaws.com/he-public-data/EVEREST_SPECIAL_LIMITED_EDITION_BEER_POKHARA_NEPAL_FEB_2013_28851073145129_201905131625260ec63f6.jpg"
                title="Rise of the Phoenix"                />
                 <Image image="https://s3-ap-southeast-1.amazonaws.com/he-public-data/https%20_specials-images.forbesimg.com_imageserve_5e325c56f133f400076b17b9_0x03b6f8ad.jpg"
                title="Sinister"
                />
                
            </div>
            <div className="Images">
            
                <Image image="https://s3-ap-southeast-1.amazonaws.com/he-public-data/low-calorie-beers-157981804958062d8.jpg"
                 title="Sex and Candy"
                />
                
                 <Image image="https://s3-ap-southeast-1.amazonaws.com/he-public-data/Swedish_beerb2d62a0.jpg"
                 title="Black Exodus"
                />
                 <Image image="https://s3-ap-southeast-1.amazonaws.com/he-public-data/EVEREST_SPECIAL_LIMITED_EDITION_BEER_POKHARA_NEPAL_FEB_2013_28851073145129_201905131625260ec63f6.jpg"
                title="Lake Street Express"                />
                 <Image image="https://s3-ap-southeast-1.amazonaws.com/he-public-data/https%20_specials-images.forbesimg.com_imageserve_5e325c56f133f400076b17b9_0x03b6f8ad.jpg"
                title="Foreman"
                />
                
            </div>
            
        </div>
    )
}

export default ImageCard
