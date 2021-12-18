import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './root-navigation';
import Login from '../screens/login';
import GithubLogin from '../screens/github-login';
import Home from '../screens/home';
import Repos from '../screens/repos';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  const isLoggedIn = useSelector((state: RootState)=> state.user.isLoggedIn)

  return(<NavigationContainer ref={navigationRef}>
    <Stack.Navigator>
      {isLoggedIn===true ? <>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Repos" component={Repos} />
      </>:<>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Github Login" component={GithubLogin} />
      </>}
      
    </Stack.Navigator>
  </NavigationContainer>
);
}

export default AuthNavigation;
