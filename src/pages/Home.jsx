import React from 'react'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import SlideShow from '../components/SlideShow'
const Home = () => {
    return (
        <Helmet title="Trang chủ">
            <SlideShow />
            <HeroSlider
            />
        </Helmet>
    )
}

export default Home
