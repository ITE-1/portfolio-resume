
import './App.scss';
import { ChildComponent } from './themeContext/childComponent';

import { ThemeProvider} from './themeContext/themeContext';

function App() {
///////////////////////

// const { isDarkMode, toggleTheme } = useTheme();

// const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';




  return (
    <ThemeProvider >
     
        <ChildComponent />
     
    </ThemeProvider>
  );
}

export default App;
