import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
export default class Category extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        };
        return (
            <div style={{ background: '#fff' }}>
                <div className="container" id="header-category-bk">
                    <Slider {...settings}>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/Grocery-staple`,
                                }}>
                                    <img className="img-fluid" src="img/category/Mens.jpg" alt="Mens" />
                                    <h6>Mens</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/personal-care`,
                                }}>
                                    <img className="img-fluid" src="img/category/Running and walking.jpg" alt="Running and walking" />
                                    <h6>Running & walking</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/household-items`,
                                }}>
                                    <img className="img-fluid" src="img/category/Team sports.jpg" alt="Team-sports" />
                                    <h6>Team sports</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/home-kitchen`,
                                }}>
                                    <img className="img-fluid" src="img/category/Racket sports.jpg" alt="Racket sports" />
                                    <h6>Racket sports</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/beverages`,
                                }}>
                                    <img className="img-fluid" src="img/category/Cycling.jpg" alt="Cycling" />
                                    <h6>Cycling</h6>
                                </Link>
                            </div>
                        </div>
                    </Slider >
                </div>
            </div >
        )
    }
}
