import './App.css';

import WeatherInfo from './WeatherInfo';


function App() {

  return (
    <div className="App">
      
      <header className="App-header">
        <img src="https://cdn-icons-png.flaticon.com/512/831/831268.png" alt="logo" className="logop" />
        <p className="logon">My WeatherApp</p>
      </header>
      
      <WeatherInfo/>
    </div>
  );
}

export default App;
