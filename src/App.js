import './App.css';
import {ThemeProvider, ThemedComponent} from './components/ChangeTheme.jsx'

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;