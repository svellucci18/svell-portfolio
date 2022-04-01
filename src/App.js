import logo from './logo.svg';
import './App.css';
import {Button, Container, Row, Col} from "react-bootstrap";
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import PortfolioContainer from './components/PortfolioContainer';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <PortfolioContainer/>
      <Footer/>
    </>
  )
};

export default App;
