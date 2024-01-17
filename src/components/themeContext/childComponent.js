import Header from '../header/header';
import Body from '../body/body';
import Footer from '../footer/footer';
import LeftSideBar from '../sidebar/sidebar';
import { useTheme, ThemeProvider } from './themeContext';

export const ChildComponent = () => {
    const { isDarkMode} = useTheme();

    const showSliderUp = () => {
      const currentYLocation = window.pageYOffset;
    if(currentYLocation > 300) {
       document.getElementById('scrollToTop').style.display = 'block'
   
    } else {
      document.getElementById('scrollToTop').style.display = 'none';
    
    }
  }
////////////////////////////

window.addEventListener('scroll', showSliderUp)
    const slideUp = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }

    return (
        <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
         
        <LeftSideBar />
       
         
          <img id='scrollToTop' onClick={() => slideUp()}className='scrollToTop element-with-pulse' width="50" height="50" src="https://img.icons8.com/glyph-neue/50/FAB005/double-up.png" alt="double-up"/>
       
      <Header />
        <Body />
      <Footer />  
      </div>
       
   
    )
}