import React from 'react';
import './reader.css'
import image from '../images/gf.png';

class Reader extends React.Component {

    render(){
        return(
            <div className='reader-container-background'>
                <div className = "closeup-body-container">
                    <div className='reader-container'>
                    <div className = "reader-card">
                        <ul className='reader-ul'>
                            <div className="reader-image-and-article">
                                <div className='reader-image'><img src={image}  /></div>
                                <div className='reader-article'>
                                    <div className='reader-article-heading'>
                                        <p className='reader-article-name'>A Royale With Cheese</p>
                                        <p className='reader-article-date'>20th March 2021</p>
                                    </div>
                                    <div className='reader-article-content'>
                                        Sort of, it's actually "Le Royal Cheese". Their name for any variety of quarter-pounder is a Royal, since quarter-pound is pretty meaningless in a country that uses the metric system. In other metric-using countries it's generally called some variation of the same, including "McRoyal" and "Hamburger Royale".
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default Reader