
import './App.css';
import Jokes from './components/Jokes';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile/>
      <Jokes/>
      {/* <button onClick={<Jokes/>}>Jokes</button> */}
    </div>
  );
}

export default App;
