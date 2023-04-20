import Calculator from "./components/Calculator";
import "./index.css";

const App = () => {
  return (
    <div className="grid min-h-screen place-content-center bg-gradient-to-r from-indigo-400 to-indigo-500 font-mono">
      <Calculator />
    </div>
  );
};

export default App;
