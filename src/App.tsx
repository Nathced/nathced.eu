import myMemoji from './assets/memoji.png';
import { FaEnvelope } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <>
      <div className="logo-container">
        <a href="https://nathced.eu" target="_blank" rel="noopener noreferrer">
          <img src={myMemoji} className="memoji" alt="my memoji" />
        </a>
      </div>

      <h1>Nathced</h1>

      <p className="maintenance">
        Mon site est en maintenance pour le moment. On se revoit plus tard ?
      </p>

      <div className="email-button-container">
        <a href="mailto" className="email-button">
          <FaEnvelope className="icon" /> Contacter via email (non disponible actuellement)
        </a>
      </div>
    </>
  );
}

export default App;
