import Header from '../header/header';
import Body from '../body/body';
import Footer from '../footer/footer';
import LeftSideBar from '../sidebar/sidebar';
import { useTheme, ThemeProvider } from './themeContext';
import ScrollToTop from '../ux-ui/scrollToTop';

export const ChildComponent = () => {
    const { isDarkMode} = useTheme();



    return (
        <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
         
        <LeftSideBar />
        <ScrollToTop />
      
        <Header />
          <Body />
        <Footer />  
      </div>
       
   
    )
}