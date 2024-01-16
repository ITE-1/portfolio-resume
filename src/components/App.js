
import './App.scss';
import { ChildComponent } from './themeContext/childComponent';

import { ThemeProvider} from './themeContext/themeContext';

function App() {
///////////////////////

// const { isDarkMode, toggleTheme } = useTheme();

// const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';


  const showSliderUp = () => {
      const currentYLocation = window.pageYOffset;
    if(currentYLocation > 200) {
       document.getElementById('scrollToTop').style.display = 'block'
       setTimeout(() => {
        document.getElementById('scrollTopInfo').style.display = 'none';
      }, 5000)
    } else {
      document.getElementById('scrollToTop').style.display = 'none';
    
    }
  }
////////////////////////////

window.addEventListener('scroll', showSliderUp)

  return (
    <ThemeProvider >
     
        <ChildComponent />
     
    </ThemeProvider>
  );
}

export default App;
