import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
             className="home__image"
             alt="banner"
            />
            <div className="home__row">
                <Product 
                    id="123456789"
                    title="The Lean Startup: How Constant Innovation Creates Radically Succesful Business Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />

                <Product
                    id="0001"
                    title="Samsung Galaxy Note 20 5G Factory Unlocked Android Cell Phone"
                    price={699.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81AczAgBE1L._AC_SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="0002"
                    title="Funny Costumes Dinosaur Inflatable Costumes"
                    price={34.84}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71J-YtSUd3L._AC_UX679_.jpg"
                />

                <Product
                    id="0004"
                    title="WOD Nation Weightlifting Hook Grip Tape - 3 Pack 23 Feet Long Sticky, Comfortable, Stretchy Athletic Tape for Weight Lifting"
                    price={24.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/91AmZ5tE2KL._AC_SL1500_.jpg"
                />

                <Product
                    id="0007"
                    title="Oxford Spiral Notebooks, 1 Subject, College Ruled Paper, Durable Plastic Cover, 100 Sheets, Divider Pocket, 3 per Pack (10390) "
                    price={9.89}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41OJa46VMDL._AC_US327_QL65_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="0003"
                    title="Samsung CJ89 43 Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor"
                    price={1239.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81v90JtbImL._AC_SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
