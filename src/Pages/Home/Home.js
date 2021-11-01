import React from 'react';
import OurServices from './OurServices/OurServices';
import OurTeams from './OurTeams/OurTeams';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div className="home">
            <Slider></Slider>
            <OurServices></OurServices>
            <Services></Services>
            <OurTeams></OurTeams>
        </div>
    );
};

export default Home;