import Pokedex from './component/pokedex';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import "./index.css"

function App() {
  return (
    <div >
      <Container className="p-5 roomfac">
        <header style={{color:"black"}}>Pokemon</header>
      </Container>
      <Container className="roomfac">
      <Pokedex/>
      </Container>
    </div>
  );
}

export default App;
