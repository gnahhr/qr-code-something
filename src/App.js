import './App.css';
import QRScannerPage from './components/QRScannerPage/QRScannerPage.js';
import QRGeneratorPage from './components/QRGeneratorPage/QRGeneratorPage';
import AuditPage from './components/AuditPage/AuditPage';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
  
          <Routes>
            <Route path="/generator" element={<QRGeneratorPage />} />
            <Route path="/" exact element={<QRScannerPage />} />
            <Route path="/audit" element={<AuditPage />} />
          </Routes>
      
      </div>
    </Router>
  );
}

export default App;