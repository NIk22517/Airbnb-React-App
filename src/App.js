import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      

      <Routes>
      <Route path='/search' element={<SearchPage />} />
        <Route path='/' element={<Home />} />
      </Routes>


      <Footer />
    </BrowserRouter>
  );
}

export default App;
