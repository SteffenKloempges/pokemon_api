import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <Routes>
        <Route path='/' element={<PokemonList />} />
        <Route path="/detail/:name" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
