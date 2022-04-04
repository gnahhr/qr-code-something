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
            <Route path="/cafeteria"  element={<QRGeneratorPage location="Cafeteria" />} />
            <Route path="/meeting"  element={<QRGeneratorPage location="Meeting Room" />} />
            <Route path="/basketball"  element={<QRGeneratorPage location="Basketball Court" />} />
            <Route path="/videogame"  element={<QRGeneratorPage location="Video Game Hall" />} />
            <Route path="/" exact element={<QRScannerPage />} />
            <Route path="/audit" element={<AuditPage />} />
          </Routes>
      
      </div>
    </Router>
  );
}

export default App;