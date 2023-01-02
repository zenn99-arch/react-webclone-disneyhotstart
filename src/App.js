import {BrowserRouter  as  Router, Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
