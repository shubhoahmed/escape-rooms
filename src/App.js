
import { ToastContainer } from 'react-toastify';
import './App.css';
import EscapeData from './Components/EscapeData.js/EscapeData';
import Questions from './Components/Questions/Questions';

function App() {
  return (
    <div className="App">
      <EscapeData></EscapeData>
      <Questions></Questions>
      <ToastContainer />
    </div>
  );
}

export default App;
