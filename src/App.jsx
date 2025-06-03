import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Success from './components/Success';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}


export default App;