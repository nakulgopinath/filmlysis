import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './recentposts.css';
import { Carousel } from 'react-responsive-carousel';
import image from '../images/house01-700x500.jpg';

class RecentPosts extends Component {
    render() {
        return (
            <div className='corousel-container'>
                <Carousel showThumbs={false} autoFocus autoPlay infiniteLoop>
                <div>
                    <img src={image} />
                    <p className="legend">We Need To Talk About Irakal</p>
                </div>
                <div>
                    <img src={image} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
        );
    }
};

export default RecentPosts
