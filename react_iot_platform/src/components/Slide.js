import React from 'react';
import p1 from '../images/1.png'
import p2 from '../images/2.jpg'
import p3 from '../images/3.png'
import "../css/welcome.css"

class Slide extends React.Component{
    render(){
        return(
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleDark" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleDark" data-slide-to="1"></li>
                    <li data-target="#carouselExampleDark" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-interval="10000">
                        <img src={p1} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-interval="2000">
                        <img src={p2} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={p3} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleDark" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleDark" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
        );
    }
}
export default Slide;