import './App.css';
import Blog from './Blog';
import Home from './Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
