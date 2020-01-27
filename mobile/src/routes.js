import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main:{ // transforma em objeto
            screen: Main,
            navigationOptions:{
                title: 'DevRadar',
            },
        },
        Profile:{ // transforma em objeto
            screen: Profile,
            navigationOptions:{
                title: 'Perfil no Github',
            },
        },
    },{
        defaultNavigationOptions:{
            headerBackTitleVisible: false,
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: '#7d40e7',
            },
        },
    })
);

export default Routes;