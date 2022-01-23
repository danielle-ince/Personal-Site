import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button href="https://reactjs.org"
          target="_blank" variant="contained">Learn React
        </Button>
      </header>

    </div>
  );
}

export default App;
