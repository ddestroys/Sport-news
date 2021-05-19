import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class LinkList extends Component{
  render() {
    return <div className='nav-bar'>
      <NavLink exact className='nav-item' activeClassName='nav-active' to='/'>
        <span>Home</span>
      </NavLink>
      <NavLink exact className='nav-item' activeClassName='nav-active' to='/sport-news'>
        <span>Sport news</span>
      </NavLink>
      <NavLink exact className='nav-item' activeClassName='nav-active' to='/exchange-rates'>
        <span>Exchange rates</span>
      </NavLink>
      <NavLink exact className='nav-item' activeClassName='nav-active' to='/weather'>
        <span>Weather</span>
      </NavLink>
    </div>
  }
}

export default LinkList;