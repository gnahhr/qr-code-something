import './App.css';
import QRScannerPage from './components/QRScannerPage/QRScannerPage.js';
import QRGeneratorPage from './components/QRGeneratorPage/QRGeneratorPage.js';
import AuditPage from './components/AuditPage/AuditPage.js';
import Header from './components/Header/Header.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
  
          <Routes>
            <Route path="/cafeteria"  element={<QRGeneratorPage location="cafeteria" />} />
            <Route path="/meeting"  element={<QRGeneratorPage location="meeting room" />} />
            <Route path="/basketball"  element={<QRGeneratorPage location="basketball court" />} />
            <Route path="/videogame"  element={<QRGeneratorPage location="video game hall" />} />
            <Route path="/" exact element={<QRScannerPage />} />
            <Route path="/audit" element={<AuditPage />} />
          </Routes>
      
      </div>
    </Router>
  );
}

export default App;