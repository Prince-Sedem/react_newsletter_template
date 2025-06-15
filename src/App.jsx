import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import NewsLetterForm from './components/NewsLetterForm';
import Success from './components/Success';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewsLetterForm />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}


export default App;