import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Test Button</Button>
        <a>
        <GetAuth/>
        </a>
      </header>

    </div>

  );
}

function GetAuth() {
  const Data = "Hola";
  const dataToSend = JSON.stringify({
    "Function": "LogIn",
    "LanguageId": "ES",
    "Password": "0123456789",
    "ContractId": "0123456789"
  });
  fetch("https://www.triyolo.com/ejercicio/rest/index.php?"+dataToSend, {
  "mode": "no-cors",
  "method": "Get",
  "headers": {
  "charset": "utf-8",
  "Access-Control-Allow-Origin": "*",
  "content-type": "application/json",
  "accept": "application/json"
  }
  })
  .then(
    function (response) {
    console.log("nada");
}
  )
  .catch(err => { console.log("nada de nada");
  });
  console.log("se jecuto");
return Data;

}



export default App;
