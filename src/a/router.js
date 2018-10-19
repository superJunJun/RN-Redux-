import HomePage from './index';
import MainPage from './Home';
import DetailPage from './Home/Detail';

const HomeNav = {
    Home: {screen: HomePage},
    Main: {screen: MainPage},
    Detail: {screen: DetailPage},
};

export default HomeNav;