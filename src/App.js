import SideBar from "./components/SideBar";
import styled from 'styled-components';
import Home from './sections/Home/Home'
import { Switch, Route } from "react-router-dom";
import AboutMe from "./sections/AboutMe/AboutMe";
import Portfolio from "./sections/Portfolio/Portfolio";
import Resume from './sections/Resume/ResumePage';
import Contact from './sections/Contact/Contact';
import Blog from "./sections/BlogPage/BlogPage";
function App() {
  return (
    <div className="App">
      <SideBar />
      <Main>

        <Switch>
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
        </Switch>

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
  .lines{
    position: absolute;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-evenly;
    .line-1, .line-2, .line-3, .line-4{
      width: .2px;
      min-height: 100vh;
      background-color: var(--border-color) ;
    }
  }
`;

export default App;
