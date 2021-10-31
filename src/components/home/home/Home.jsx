import React from 'react';
import CarouselItem from '../carouselItem/CarouselItem';
import Header from '../../../common/header/header'
import Services from '../services/Services';
import Experience from '../experience/Experience';
import Review from '../review/Review';
import Footer from '../../../common/footer/Footer'
import RepairVideo from '../repairVideo/RepairVideo';
import StartRepair from '../StartRepair/StartRepair'
import Contact from '../contact/Contact';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';


const Home = () => {
    return (
        <div>
            <Header />
            <CarouselItem />
            <Services />
            <Experience />
            <RepairVideo />
            <StartRepair />
            <Review />
            <Contact />
            <Footer />
            <div style={{ textAlign:'end'}} className="pb-5 pe-4 fixed-bottom go-up" >
                <a href="#home"><BsFillArrowUpCircleFill style={{color:'#FF5733', fontSize:'50px'}} /></a>
            </div>
        </div>
    );
};

export default Home;