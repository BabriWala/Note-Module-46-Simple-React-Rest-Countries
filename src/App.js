import logo from './logo.svg';
import './App.css';
import LoadCountries from './components/LoadCountries';
import Footers from './components/Footer/Footers';
import Header from './components/Header/Header';


function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <LoadCountries></LoadCountries>
      <Footers></Footers>
    </div>
  );
}

export default App;
