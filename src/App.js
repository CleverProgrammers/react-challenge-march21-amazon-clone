import './App.css';
import Header from './Header'
import Cart from './Cart'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import styled from 'styled-components'


function App() {
  return (
    <Router>
      <Container>
        <Header />
        
        <Switch>
          
          <Route path="/cart">
            <Cart />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;
`
