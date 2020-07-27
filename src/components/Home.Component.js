import React, {Component} from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const photos = [
    {
      name:'Photo 01',
      url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
  
    {
      name: 'Photo 02',
      url: "https://images.unsplash.com/photo-1471967183320-ee018f6e114a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
    },
  
    {
      name: 'Photo 03',
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
  
    {
      name: 'Photo 04',
      url: "https://images.unsplash.com/photo-1527751171053-6ac5ec50000b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
  
    {
      name: 'Photo 05',
      url: "https://images.unsplash.com/photo-1425421598808-4a22ce59cc97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    }
  ]
export default class Home extends Component{
    render(){
        const settings = {
            dots: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            speed: 500,
            slidesToshow: 1,
            arrows: true,
            slidesToscroll: 1,
            className: "slides"
          }

        return(
            
        <div className = "App" style = {{padding: 24}}>
         <h2><center>Welcome To The Party</center></h2> 
        <br/> 
          <Slider {...settings}>
            {photos.map((photo) => {
              return(
                <div>
                  <img width = "100%"  src ={photo.url} alt=""/>
                </div>
              )
            }
            )}
            
          </Slider>
        </div>
        )
    }
}