import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Success from './components/Success';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}


export default App;