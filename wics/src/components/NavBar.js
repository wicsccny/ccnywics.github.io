import React, {Component} from 'react';

class NavBar extends Component {
    constructor(props) {
      super(props);

      this.state = {
        width: 0      
      };

      this.openNav = this.openNav.bind(this);
      this.closeNav = this.closeNav.bind(this);
    }

    openNav() {
      this.setState({ width: "100%" });
    }

    closeNav() {
      this.setState({ width: 0 });
    }

    render() {
        return (
            <div>
              <span onclick="openNav()">
                <i className="material-icons nav-icon" onClick={this.openNav}>menu</i>
              </span>

              <div style={{width: this.state.width }} className="sidebar">
                <i className="material-icons close-icon" onClick={this.closeNav}>close</i>
                <div class="sidebar-content">
                  <a className="navlink" href="#">About Us</a>
                  <a className="navlink" href="#">Upcoming Events</a>
                  <a className="navlink" href="#">E-board</a>
                  <a className="navlink" href="#">Contact</a>
                </div>
              </div>
            </div>
        );
    }
}; 

export default NavBar;