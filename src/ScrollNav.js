import { Component, Fragment, createRef } from 'react';
import { HashRouter, NavLink, withRouter } from 'react-router-dom'
import ScrollSpy from './ScrollSpy';
import './styles.css';

class ScrollNav extends Component {
  scrollSpyData = ["first", "second", "third", "forth"];

  // the following function is very important so that the URL is replaced not pushed (if you don't use it and the user did navigate through your sections by clicking on menu links then he click the back button in a browser to leave your site, he will go back to every section "as many times as he clicked menu links" then at the end he will exit which can lead to bad experience)
  replaceUrl = url => {
    this.props.history.replace(url);
  };

  render() {
    return (
      <div className="container">
        <div className="sidebar column left">
          <ul>
            <li>
              <NavLink onClick={() => this.replaceUrl("/first")} to="/first">
                First
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => this.replaceUrl("/second")} to="/second">
                Second
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => this.replaceUrl("/third")} to="/third">
                Third
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => this.replaceUrl("/forth")} to="/forth">
                Forth
              </NavLink>
            </li>
          </ul>
        </div>
        {/*ScrollSpy properties:
        - data => an array of your links without "/"
        Notes:
        1- you need may use HashRouter or BrowserRouter in your application
        2- don't forget to use the click listener on NavLink if you don't want to push to the histroy of your app*/}
        <div className="column right">
            <ScrollSpy data={this.scrollSpyData}>
                <div className="section first">First section</div>
                <div className="section second">Second section</div>
                <div className="section third">Third section</div>
                <div className="section forth">Forth section</div>
            </ScrollSpy>
        </div>
      </div>
    );
  }
}

export default withRouter(ScrollNav);

// ReactDOM.render(
//   <HashRouter>
//     <ScrollNav />
//   </HashRouter>,
//   document.querySelector("#app")
// );
