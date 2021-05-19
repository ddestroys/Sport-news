import React, {Component} from 'react';
import {ReactComponent as Logo} from "../../../img/logo.svg";
import {ReactComponent as Inst} from "../../../img/instagram.svg";
import {ReactComponent as Tg} from "../../../img/telegram.svg";
import {ReactComponent as Vk} from "../../../img/vk.svg";

class Header extends Component {
  redirectTo = (url) => {
    window.open(url, "_blank");
  };
  render() {
    return <div className='header-wrapper'>
      <div className='logo'>
        <Logo/>
        <div className='header-title'>Sport news</div>
      </div>
      <div className='contact-us'>
        <div className='contact'>Contact us!</div>
        <div className='link-block'>
          <Inst onClick={this.redirectTo.bind(this,'https://www.instagram.com/ddestroys/')}/>
          <Tg onClick={this.redirectTo.bind(this,'https://t.me/ddestroys')}/>
          <Vk onClick={this.redirectTo.bind(this,'https://vk.com/ddestroys')}/>
        </div>
      </div>
    </div>
  }
}

export default Header;