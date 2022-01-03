import './App.css';
import react, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [ apiInfo, setApiInfo ] = useState('No info yet');

  useEffect(() => {
    axios.get("http://hp-api.herokuapp.com/api/characters")
    .then(res => { 
      setApiInfo(res.data) })
    .catch(function (error) { console.log(`error!`)})
  }, [apiInfo])

  const showThyWizard = () => {
    alert(apiInfo[0]['name'])
  }

  return (
    <div className="App">
      <button onClick={() => showThyWizard()}>Show the Wizard!</button>
    </div>
  );
}

export default App;
