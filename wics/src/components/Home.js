import React, {Component } from 'react';
import Navbar from './NavBar';
import About from './About';
import Events from './Events';
import wicsLogoLight from '../images/wicsLogoLight.png';
import wicsLogoDark from '../images/wicsLogoDark.png';
import Scroll from 'react-scroll';
import { Link } from 'react-scroll'


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

class Home extends Component {

    render() {
        return (
          <div>
            <div className="home">
              <Navbar />
              <div className="body">

                <img className="animated fadeInDown delay-.5s" src={wicsLogoLight} alt="wics logo"/>
       

                <div className="home-sidebar animated slideInRight delay-.5s">
                    <a className="navlink" href="#">
                      <Link activeClass="active" to="about-pos" spy={true} smooth={true} offset={50} duration={500}>About Us</Link></a>
                    <a className="navlink" href="#">  
                    <Link activeClass="active" to="events-pos" spy={true} smooth={true} offset={50} duration={500}>Events</Link></a>
                    <a className="navlink" href="#">E-board</a>
                    <a className="navlink" href="#">Contact</a>
                </div>

                <div className="test animated fadeInDown delay-1s">
                  <Link activeClass="active" to="about-pos" spy={true} smooth={true} offset={50} duration={500}>    
                    <i className="material-icons down-icon animated infinite bounce slower delay-1s">keyboard_arrow_down</i>
                  </Link>
                </div>
              </div>
            </div>

            <About />
            <Events />

          </div>
        );
    }
}; 

export default Home;