import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
