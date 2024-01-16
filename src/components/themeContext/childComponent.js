import Header from '../header/header';
import Body from '../body/body';
import Footer from '../footer/footer';
import LeftSideBar from '../sidebar/sidebar';
import { useTheme, ThemeProvider } from './themeContext';

export const ChildComponent = () => {
    const { isDarkMode, setIsDarkMode, toggleTheme } = useTheme();

    const slideUp = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }

    return (
        <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
        <button onClick={toggleTheme}>changeTheme</button>
        <LeftSideBar />
        <button className='scrollToTop' id='scrollToTop' onClick={slideUp}>
          <span id='scrollTopInfo'>Навверх</span>
          <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M0 21l12-18 12 18h-24zm12-16.197l-10.132 15.197h20.263l-10.131-15.197"/></svg>
        </button>
      <Header />
        <Body />
      <Footer />  
      </div>
       
   
    )
}