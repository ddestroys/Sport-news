import React, {Component} from 'react';

const categories = [{first: 'Home', second: 'Future'}, {first: 'News', second: 'Culture'}, {first: 'Sport', second: 'Music'}, {first: 'Reel', second: 'TV'}, {first: 'Worklife', second: 'Weather'}, {first: 'Travel', second: 'Sounds'}];
const info = ['Terms of Use', 'About the project', 'Privacy Policy', 'Cookies', 'Accessibility Help', 'Parental Guidance', 'Contact us', 'Get Personalised Newsletters', 'Advertise with us'];

class Footer extends Component{
  render() {
    return <div className='footer'>
      <div className='footer-title'>Explore more news!</div>
      <div className='footer-content'>
        <div className='top'>
          {categories.map((elem, index)=>{
            return <div className='footer-block' key={index}>
              <div className='category'><span className='animated-hover'>{elem.first}</span></div>
              <div className='category'><span className='animated-hover'>{elem.second}</span></div>
            </div>
          })}
        </div>
        <div className='bottom'>
          <div className='footer-row'>
          {info.map((elem,index)=>{
            return <span className='animated-hover' key={index}>{elem}</span>
          })}
          </div>
          <div className='copyright'>Copyright © 2021 Destroys. The Destroys is not responsible for the content of external sites. Read about our approach to external linking.</div>
        </div>
      </div>
    </div>
  }
}

export default Footer;