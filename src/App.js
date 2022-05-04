import SideBar from "./components/SideBar";
import styled from 'styled-components';
import Home from './sections/Home/Home'
import { Switch as Switching, Route } from "react-router-dom";
import AboutMe from "./sections/AboutMe/AboutMe";
import Portfolio from "./sections/Portfolio/Portfolio";
import Resume from './sections/Resume/ResumePage';
import Contact from './sections/Contact/Contact';
import Blog from "./sections/BlogPage/BlogPage";
import {Brightness4} from "@material-ui/icons";
import { Switch } from "@material-ui/core";


function App() {
  return (
    <div className="App">
      <SideBar />

      <div className="theme">
        <div className="light-dark-mode">
            <div className="left-content">
              <Brightness4 />
            </div>
            <div className="right-content">
              <Switch
                value=""
                //checked={}
                //onChange={} 
                inputProps={{'arial-label':'controlled'}}
              />
            </div>
        </div>
      </div>

      <Main>
        <Switching>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/about" exact>
            <AboutMe />
          </Route>

          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>

          <Route path="/resume" exact>
            <Resume />
          </Route>

          <Route path="/contact" exact>
            <Contact />
          </Route>

          {/* <Route path="/blog" exact>
            <Blog />
          </Route> */}
        </Switching>

      </Main>
    </div>
  );
}

const Main = styled.div`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  .right-content{
    background-color: transparent;
  }
`;

export default App;
