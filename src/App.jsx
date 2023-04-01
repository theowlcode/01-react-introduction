import "./App.css";
import { MiPrimerComponente } from "./miPrimerComponente";

function App() {
  return (
    <div className="App">
      <h1>hola</h1>
      <h2>mundo</h2>
      <MiPrimerComponente text={"Texto 1"} />
      <MiPrimerComponente text="Texto 2" />
      <MiPrimerComponente text={"Texto 3"} />
      <MiPrimerComponente text={"Texto 4"} />
    </div>
  );
}

export default App;
