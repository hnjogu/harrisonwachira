import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import PreferencesForm from '../News/PreferencesForm';
import Viewnews from '../News/view_news'

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  render() {
    return (
      <SideNav expanded={this.state.isVisible}>
        <SideNav.Toggle
          onClick={() => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
                </NavIcon>
                <NavText>
                    <a className="nav-link active" aria-current="page" href="/home">Home</a>
                </NavText>

            </NavItem>
            <NavItem eventKey="Post-News">
                <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
                </NavIcon>
                <NavText>
                    <a className="nav-link active" aria-current="page" href="/news-view">News</a>
                </NavText>
            </NavItem>
            <NavItem eventKey="Post-Articles">
                <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
                </NavIcon>
                <NavText>
                    <a className="nav-link active" aria-current="page" href="/articles-view">Articles</a>
                </NavText>
            </NavItem>
            <NavItem eventKey="Profile">
                <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
                </NavIcon>
                <NavText>
                    <a className="nav-link active" aria-current="page" href="/home">User Profile</a>
                </NavText>
            </NavItem>
            <NavItem eventKey="placed orders">
                <NavIcon>
                <i
                    className="fa fa-fw fa-line-chart"
                    style={{ fontSize: "1.75em" }}
                />
                </NavIcon>
                <NavText>
                    <a class="nav-link" href="/logout">logout </a>
                </NavText>
            </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default SideNavBar;
