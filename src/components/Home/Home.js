import React from 'react';
import Banner from '../banner/Banner';
import Coaches from '../Feature/Coache/Coaches';
import Feature from '../Feature/Feature';
import Testimonials from '../Feature/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            
            <Banner />
            <Feature />
            <Coaches />
            <Testimonials />
        </div>
    );
};

export default Home;