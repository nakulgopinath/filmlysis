import React  from 'react'
import './card.css'
import {Link} from 'react-router-dom';
import image from '../images/gf.png';

class Card extends React.Component {
    render() {
        return(
            <div className='card'>
                <div className='poster'>
                <Link to={{
                    pathname:this.props.topCloseUpPosts.category+'/:'+this.props.topCloseUpPosts.id,
                    state:{reader:this.props.topCloseUpPosts}
                    }}><img id="background-img" src={image} height={196} width={379.35} /></Link>
                   <p id="heading-para">{this.props.topCloseUpPosts.heading? this.props.topCloseUpPosts.heading:''}</p> 
                </div>
            </div>
        );
        
    }
}

export default Card