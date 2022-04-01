import logo from './logo.svg';
import './App.css';
import {Button, Container, Row, Col} from "react-bootstrap";
import Navbar from './components/Navbar';
import Bio from './components/Bio';


function App() {
  return (
    <>
      <Navbar/>
      <Container>
      <Bio/>
      <Button>Test </Button>
      </Container>
    </>
  )
};

export default App;
