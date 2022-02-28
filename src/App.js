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
      <Main>
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4 />
          </div>
          <div className="right-content">
            <Switch
              value=""
              //checked={}
              //onChange={} 
              inputProps={{'arial-label':''}}
            />
          </div>
        </div>

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

          <Route path="/blog" exact>
            <Blog />
          </Route>
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
 .light-dark-mode{
   position: absolute;
   right: 0;
   top: 10%;
   background-color: red;
   width: 6rem;
   height: 3rem;
   display: flex;
   z-index: 15;
   align-items: center;
   justify-content: space-between;
 }
`;

export default App;
