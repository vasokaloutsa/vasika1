import './App.css';
import Header from './components/Header/Header'
// import Red from './components/Red/Red'
// import Green from './components/Green/Green'
// import Blue from './components/Blue/Blue'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import styled, { css } from 'styled-components'

const GreenDiv = styled.div`
  height:100%;
  background-color: rgb(145, 240, 145);
`
const RedDiv = styled.div`
  height:100%;
  background-color: rgb(236, 106, 106);
`

const BlueDiv = styled.div`
  height:100%;
  background-color: rgb(120, 161, 250);
`
const WhiteDiv = styled.div`
height:100%;
background-color: white;
`


function App() {
  return (
    <Router>
      <div>
        <Link to='/'><Header/></Link>
        <main>

          <nav className="menu">
            <ul>
              <li>
                <Link to="/red">Red</Link>
              </li>
              <li>
                <Link to="/green">Green</Link>
              </li>
              <li>
                <Link to="/blue">Blue</Link>
              </li>
            </ul>
          </nav>

          <section className="show-colors">
          <Switch>
            <Route exact path="/"><WhiteDiv /></Route>
            <Route path="/red"> <RedDiv /> </Route>
            <Route path="/green"> <GreenDiv /> </Route>
            <Route path="/blue"> <BlueDiv /> </Route>
          </Switch>
          </section>

        </main>
      </div>
    </Router>
  );
}

export default App;
