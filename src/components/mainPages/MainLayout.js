import React, {Component} from 'react';
import Header from "./header/Header";
import SportNews from "./sportNews/SportNews";
import Footer from "./footer/Footer";

class MainLayout extends Component{
  render() {
    return <div className='main-wrapper'>
      <Header />
      <SportNews />
      <Footer />
    </div>
  }
}

export default MainLayout;