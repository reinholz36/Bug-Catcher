import './App.css';
import HomePage from './Pages/Homepage';
import LevelContextProvider from './Contexts/LevelContext';
import CharacterContextProvider from './Contexts/characterContext';
const App = () => {
  return (
    <div className="App">
    <LevelContextProvider>
    <CharacterContextProvider>
    <HomePage/>
    </CharacterContextProvider>
    </LevelContextProvider>
    </div>
  );
}

export default App;
