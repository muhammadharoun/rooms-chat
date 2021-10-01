import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Join from './components/Join/Join'

function App() {
  return (
    <Router>
      <Route path='/' exact component={Join} />
    </Router>
  );
}

export default App;
