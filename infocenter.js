import React, {Component} from 'react';
import Songs from './songs.js';
import SongItems from './songItems.js';
import Jobs from './job.js';
import JobItems from './jobItems.js';
import ReactPlayer from 'react-player';
import ImageLoader from 'react-load-image';
import uuid from 'uuid';
import {Button} from 'react-dom';
import Slider from 'react-slick';
import axios from 'axios';
import $ from 'jquery';
import dreamhost from 'dreamhost';

function ParseJSON(response) {
  return response.text().then(function(text) {
    return text ? JSON.parse(text) : {}
  })
}
function NumberOfListItems(items){
  var lists_arr=[];
    lists_arr.push(items);
return lists_arr;
}
function ReturnImageList(lists_arr){
    var imageList = lists_arr.map(function(list){
      return <li><img src={list}/></li>;
  })
  
return  <ul id="songItems_ul">{imageList}</ul>;
}
function LeftNavButton(props) {
  const {className, style, onClick} = props
  return (
      <div className="className" style={{...style, display: 'block', position: "absolute", left: "5px", marginLeft: 0, top: "50%", zIndex: "2"}} onClick={onClick}>
          <button type="button" class="btn btn-default" aria-label="Left Align">
              <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
          </button>
      </div>
  );
}
function RightNavButton(props) {
  const {clasName, style, onClick}=props
    return(
      <div className="className" style={{...style, display: 'block', position: "absolute", right: "5px", marginRight: 0, top: "50%", zIndex: "2"}} onClick={onClick}>
          <button type="button" class="btn btn-default" aria-label="Left Align">
              <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
          </button>
      </div>
    );
}
function PreLoader(props){
  return <img src="spinner.gif"/>;
}

class InfoCenter extends Component{
    constructor(){
        super();
        this.state={
          songs:[],
          jobs: [],
          pictures: []
        }
      }
      
  getSongs(){
  
    this.setState({
          songs: [
          {
          title: 'Song 1',
          url: <ReactPlayer url='https://www.youtube.com/watch?v=WsWHZrnKvv0'/>
          },
          {
          title: 'Song 2',
          url: <ReactPlayer url='https://www.youtube.com/watch?v=fI8CZznxSOU'/>
          },
          {
          title: 'Song 3',
          url: <ReactPlayer url='https://www.youtube.com/watch?v=Pt5NPvsbmrs'/>
          }
      ]})
        
  }
  
  componentWillMount(){
       this.getSongs();
  }
  
  componentDidMount(){
    this.getSongs();
  }
 
  render(){
        let settings = {
          dots: false,
          infinite: true,
          arrows: true,
          prevArrow: <LeftNavButton/>,
          nextArrow: <RightNavButton/>,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          focusOnSelect: true,
          autoplay: false,
          useCSS: true,
          pauseOnHover: true,
          adaptiveHeight: false,
          vertical: false,
          
      };
      return(
            <infocenter>
                 <div>
                    <Slider {...settings}>  
                      <div class="carousel-inner">
                        <h3 id="_loc" className="text_headers">Testimonies</h3>
                          <div class="item active">
                            <div class="row">
                                <div class="col-sm-6"><a href="#" class="thumbnail"><Songs songs={this.state.songs}/></a></div>
                                <div class="col-sm-6"><a href="#" class="thumbnail"><Songs songs={this.state.songs}/></a></div>
                               </div>
                          </div>
                      </div>
                    </Slider>
                </div>
            </infocenter>
      );
  }
}
export default InfoCenter;
