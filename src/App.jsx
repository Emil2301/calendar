import './App.css';
import { Button } from '@material-ui/core';
import Month from './components/Month/Month.jsx';

function App() {
  return (
    <div className="App">
      Hello to my calender app
      <Button color="primary">Hello World</Button>
      <Month/>
    </div>
  );
}

export default App;
