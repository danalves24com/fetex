import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HomePage from './pages/Home';
import Result from './pages/Result';

function App() {
  return (
      <>
          <Router>
              <Route exact path="/:or?" component={HomePage} />
              <Route exact path="/results/:data" component={Result} />
          </Router>
        </>
  );
}

export default App;
