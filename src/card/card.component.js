import React  from 'react'
import './card.css'
import image from '../images/gf.png';

class Card extends React.Component {
    render() {
        return(
            <div className='card'>
                <div className='poster'>
                    {/* <img id="background-img" src={image} height={143.44} width={342.24}  /> */}
                   <p>A Royale With Cheese</p> 
                </div>
                <div className="">
                    
                </div>
            </div>
        );
        
    }
}

export default Card