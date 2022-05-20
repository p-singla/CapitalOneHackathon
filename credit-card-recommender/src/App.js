import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import ShowSuggestion from './components/ShowSuggestion';
import AddCard from './components/AddCard';
import AddPriority from './components/AddPriority';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element= {<Homepage/>}></Route>
          <Route path="/showsuggestion" element={<ShowSuggestion/>}></Route>
          <Route path="/addcard" element={<AddCard/>}></Route>
          <Route path="/addpriority" element={<AddPriority/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
