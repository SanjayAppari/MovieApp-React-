import './App.css';
import TrendingMovies from './components/TrendingMovies';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { BrowserRouter as Router , Routes, Route , Link} from 'react-router-dom';
import MovieView from './components/MovieView';
import Dummy from './components/Dummy';
import SearchBar from './components/SearchBar';
import SearchMovies from './components/SearchMovies';
import Dummy2 from './components/Dummy2';

function App() {
  useEffect(()=>{
    document.body.style.backgroundColor='black';
  },[]);
  return (
    <div className="text-light">
      <Router>
         <Navbar/>
         <SearchBar/>
         <Routes>
            <Route exact path='/' element={<TrendingMovies/>} />
            <Route exact path='/search/:movie' element={<SearchMovies/> }/>
            <Route exact path='/search1/:movie' element={<Dummy2/> }/>
            <Route exact path='/view/:id' element={<MovieView/> }/>
            <Route exact path='/view1/:id' element={<Dummy/> }/>
         </Routes>
         
      </Router>
    </div>
  );
}

export default App;
