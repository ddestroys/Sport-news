import React, {Component} from 'react';
import {newsSearch} from "../../../utils/requester";
import {ReactComponent as Arrow} from "../../../img/right-arrow.svg";
import Preloader from "../../helpers/preloader/Preloader";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const settings = {
  autoPlay: true,
  infiniteLoop: true,
  interval: 5000,
  showThumbs: false,
};

const NewsBlock = ({elem, redirectToNews}) => (
    <div className='news-block'>
      {elem.author && <div className='author'>Wrote by: {elem.author}</div>}
      <div className='info'>
        <div className='txt-wrapper'>
          {elem.title && <div className='title'>{elem.title}</div>}
          {elem.description && <div className='description'>{elem.description}</div>}
        </div>
        {elem.urlToImage && <img src={elem.urlToImage}/>}
      </div>
      <div className='read-btn' onClick={redirectToNews}>Read<Arrow/></div>
    </div>
);

class SportNews extends Component {
  state = {
    isFetching: false,
    sportNewsArr: [],
    nowNewsArr: [],
    healthNewsArr: [],
    scienceNewsArr: [],
  };

  componentDidMount() {
    this.setState({isFetching: true});
    Promise.all([this.searchRequest('sports', 10),
    this.searchRequest('', 3),
    this.searchRequest('health',3),
    this.searchRequest('science', 3)]).then(r=>{
      const newState = {
        sportNewsArr: r[0],
        nowNewsArr: r[1],
        healthNewsArr: r[2],
        scienceNewsArr: r[3],
      };
      this.setState({isFetching: false, ...newState});
    });

  }

  searchRequest = (category, num) => {
    return newsSearch(category).then(r => {
      if (!r.isError) {
        return r.data.articles.slice(0, num);
      }
      return [];
    });
  };

  redirectToNews = (url) => {
    window.open(url, "_blank");
  };

  render() {
    const {sportNewsArr, nowNewsArr, scienceNewsArr, healthNewsArr, isFetching} = this.state;
    return isFetching ? <Preloader classNema='white-bg' /> : <div className='news-wrapper'>
      <div className='slider-wrapper'>
        {sportNewsArr.length !== 0 && <Carousel {...settings}>
          {sportNewsArr.map((elem, index) => {
            return <div className='slider-item' key={index} onClick={this.redirectToNews.bind(this, elem.url)}>
              {elem.urlToImage && <img src={elem.urlToImage}/>}
              {elem.title && <p className="legend">{elem.title}</p>}
            </div>
          })}
        </Carousel>}
      </div>
      <div className='categories'>
        {nowNewsArr.length !== 0 && <div className='now-reading category'>
          <div className='title'>Now reading</div>
          {nowNewsArr.map((elem, index) => {
            return <NewsBlock key={index} elem={elem} redirectToNews={this.redirectToNews.bind(this, elem.url)}/>
          })}
        </div>}
        {healthNewsArr.length !== 0 && <div className='health category'>
          <div className='title'>Health</div>
          {healthNewsArr.map((elem, index) => {
            return <NewsBlock key={index} elem={elem} redirectToNews={this.redirectToNews.bind(this, elem.url)}/>
          })}
        </div>}
        {scienceNewsArr.length !== 0 && <div className='science category'>
          <div className='title'>Science</div>
          {scienceNewsArr.map((elem, index) => {
            return <NewsBlock key={index} elem={elem} redirectToNews={this.redirectToNews.bind(this, elem.url)}/>
          })}
        </div>}
      </div>
    </div>
  }
}

export default SportNews;