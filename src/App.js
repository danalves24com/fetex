import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HomePage from './pages/Home';

function App() {
  return (
      <>
          <Router>
              <Route exact path="/" component={HomePage} />
          </Router>
        </>
  );
}

export default App;
