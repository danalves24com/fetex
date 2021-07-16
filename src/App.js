import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
      <>
          <Router>
              <Route exact path="/" component{() => { return <></>}}/>
          </Router>
        </>
  );
}

export default App;
