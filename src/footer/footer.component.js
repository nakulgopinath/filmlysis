import React  from 'react'
import './footer.css'

class Footer extends React.Component {
    render() {
        return(
            <div className='footer-container'>
                <div className='footer'>
                <p>FOLLOW US ON:  <i class="fa fa-instagram" font-size={36}></i></p>
                <p>Copyright<i class="fa fa-copyright"></i>2021</p>
                </div>
            </div>
        );
        
    }
}

export default Footer