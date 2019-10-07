import {createAppContainer, createSwitchNavigator} from 'react-navigation';  
import Login from './pages/login'; 
import Book from './pages/book'; 
import List from './pages/List'; 

const Routes = createAppContainer( 
    createSwitchNavigator({ 
        Login,  
        Book,  
        List
    })
); 
export default Routes;