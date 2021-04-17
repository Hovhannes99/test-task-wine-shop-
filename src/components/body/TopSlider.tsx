import React from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function SampleNextArrow(props:any) {
    const {onClick} = props;
    return (
        <div
            className="nextArrow"
            onClick={onClick}
        >
            <ArrowForwardIosIcon style={{color:"white"}}/>
        </div>
    );
}
function SamplePrevArrow(props: any) {

    const { onClick } = props;
    return (
        <div
            className="prevArrow"
            onClick={onClick}
        ><ArrowBackIosIcon style={{color:"white", marginLeft:"10px"}}/></div>
    );
}

export default function  TopSlider(photoes: {photoes: object[]}){

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        className: "photoSlider",
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };



    return(
        <>
            <Slider {...settings}>
                {photoes.photoes.map((item: any,index:number) => {
                        return (
                            <div className="slider-container" key={index}>
                                <div className="slider-container__shopNow">
                                    <div className="titles">
                                        <p className="name">Vite Nera Wine</p>
                                        <h2>{item.name}</h2>
                                        <p className="text">{item.text}</p>
                                        <button className="button__shop">SHOP NOW</button>
                                    </div>
                                </div>
                                <div className="slider-container__background">
                                </div>
                                <div className="photos">
                                    <img className="photo" src={item.image}/>
                                </div>
                            </div>
                        )
                    }
                )}
            </Slider>

        </>
    )
}