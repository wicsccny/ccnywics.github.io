import React, {Component} from 'react';
import { Element } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';


class Events extends Component {
    constructor(props) {
      super(props);

      this.state = {
        width: 0      
      };
    }

    render() {
        return (
            <div className="about">
              <Element id='events-pos' name='events-pos'>
                  <ScrollAnimation animateIn="typewriter" animateOut="typewriter">
                      <div className="title">
                          <h1>WE ARE WICS</h1>
                      </div>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="fadeInDown">
                      <div className="body">
                          <p>The Women in Computer Science club seeks to be a place for women to come together to 
                              <span> SUPPORT </span>,
                              <span> ENCOURAGE </span>, and 
                              <span> CREATE </span> a safe environment for all.
                          </p> 
                          <p className="transition"> Check out our upcoming <span>EVENTS</span>! </p>
                      </div>
                  </ScrollAnimation>
              </Element>
            </div>
        );
    }
}; 

export default Events;