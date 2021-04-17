import React, {useContext, useState} from "react";
import Slider from "react-slick";
import Rating from '@material-ui/lab/rating';
import {Store} from "../../App";
import TopSlider from "./TopSlider";


function SampleNextArrowPhotos(props:any){
    const {onClick} = props;
    return (
        <div
            className="nextArrowPhotos"
            onClick={onClick}
        />

    );
}

const cart : object[] = [];

export default function Home() {
    const {setWinesInCart} : any = useContext(Store)

    const [photoes, setPhotos] = useState<object[]>([
        {
            name: "Organic Farming",
            text: "We use organic farming practices to keep nature in balance closer to the surface. We support sustainability in every action!",
            image: "https://themes.getmotopress.com/vite-nera/wp-content/uploads/sites/41/2021/02/half-content-slider-image-2.jpg"
        },
        {
            name: "Big Collection of Wines",
            text: "Our ever-growing selection includes wines for all tastes: from Dry Riesling, Semi-Dry Riesling, Chardonnay, Pinot Noir,  to Cabernet Franc, Cabernet Sauvignon, many other extraordinary blends",
            image: "https://themes.getmotopress.com/vite-nera/wp-content/uploads/sites/41/2021/02/half-content-slider-image-3.jpg"
        },

        {
            name: "Best Selling Brand 2021",
            text: "We bring wines made with the utmost care and respect from vine to bottle and a true sense of terroir!",
            image: "https://themes.getmotopress.com/vite-nera/wp-content/uploads/sites/41/2021/02/half-content-slider-image.jpg"
        }
    ])
    const [winePhotos, setWinePhotes] = useState([
        {
            id:1,
            name: "ViteNera Sweet Red Wine",
            image: "https://themes.getmotopress.com/vite-nera/wp-content/uploads/sites/41/2021/02/vitenera-sweet-red-wine.jpg",
            price: "260$",
            discountsPrice: "100$",
            rating: 2.5

        },
        {
            id:2,
            name: "Vitenera Macabeo White Wine",
            image: "https://themes.getmotopress.com/vite-nera/wp-content/uploads/sites/41/2021/02/vitenera-macabeo-white-wine-1.jpg",
            price: "260$",
            rating: 5
        },
        {
            id:3,
            name: "ViteNera Carmenere Red Wine",
            image: "https://themes.getmotopress.com/vite-nera/wp-content/uploads/sites/41/2021/02/vitenera-carmenere-red-wine-1.jpg",
            price: "260$",
            discountsPrice: "100$",
            rating: 4
        },
        {
            id:4,
            name: "ViteNera Cabernet Rose Wine",
            image: "https://themes.getmotopress.com/vite-nera/wp-content/uploads/sites/41/2021/02/vitenera-сabernet-rose-wine-1.jpg",
            price: "290$",
            rating: 5

        },
        {
            id:5,
            name: "ViteNera Sweet Wine",
            image: "https://themes.getmotopress.com/vite-nera/wp-content/uploads/sites/41/2021/02/vitenera-sweet-wine.jpg",
            price: "55$",
            discountsPrice: "40$",
            rating: 2.5
        },
        {
            id:6,
            name: "ViteNera Carmenere Red Wine",
            image: "https://themes.getmotopress.com/vite-nera/wp-content/uploads/sites/41/2021/02/vitenera-carmenere-red-wine-1.jpg",
            price: "76$",
            discountsPrice: "52$"
        },
        {
            id:7,
            name: "ViteNera Carmenere Red Wine",
            image: "https://themes.getmotopress.com/vite-nera/wp-content/uploads/sites/41/2021/02/vitenera-sweet-red-wine.jpg",
            price: "86$",
        },
        {
            id:8,
            name: "Vitenera Macabeo White Wine",
            image: "https://themes.getmotopress.com/vite-nera/wp-content/uploads/sites/41/2021/02/vitenera-sweet-red-wine.jpg",
            price: "40$",
            discountsPrice: "",
            rating: 2
        }
    ])

    const setings2 = {
        arrow: false,
        dots: true,
        fade: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        className: "winesSlider",
        nextArrow: <SampleNextArrowPhotos/>,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
        }


    function addToCart(wineId:number){
        const wine = winePhotos.filter((item)=>item.id === wineId)
        cart.push(wine[0])
       setWinesInCart([...cart])
    }
    return (
        <>
            <TopSlider photoes={photoes}/>
            <div className="home-wine__shop">
                <h3>Wine Shop</h3>
                <p>Wines Of The Week</p>
            </div>
            <Slider {...setings2}>
                {winePhotos.map((item: any, index) => {
                    return (
                        <div className="wine-shop" key={index}>
                            <div className="container">
                                <div className="fas fa-arrow-right"><button
                                    className="wine-shop__cart" onClick={()=>addToCart(item.id)}>Add to Cart</button> </div>
                                <div className="card">
                                </div>
                            </div>
                            <img src={item.image} className="wine-shop__photos"/>
                            <p>
                                {
                                    item.discountsPrice && <p className={"discounts"}>
                                        <span className="priceUnderline">{item.price}</span>
                                        <span className="redPrice">{item.discountsPrice}</span>
                                    </p>
                                }
                                {
                                    !item.discountsPrice && <p className="price">
                                        {item.price}
                                    </p>
                                }
                            </p>
                            <p>{item.name}</p>
                            {item.rating ? <Rating
                                name="hover-feedback"
                                value={item.rating}
                                precision={0.5}
                            /> : ""}
                        </div>
                    )
                })

                }
            </Slider>

        </>
    )
}