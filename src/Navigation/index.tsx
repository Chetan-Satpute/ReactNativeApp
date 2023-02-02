import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './screens/Login';
import Home from './screens/Home';
import About from './screens/About';

const Stack = createNativeStackNavigator();

export const LoginContext = React.createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => {}]);

const Navigation = () => {
  const loginState = useState(false);
  const [loggedIn] = loginState;

  return (
    <LoginContext.Provider value={loginState}>
      <NavigationContainer>
        <Stack.Navigator>
          {loggedIn ? (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="About" component={About} />
            </>
          ) : (
            <Stack.Screen name="Login" component={Login} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </LoginContext.Provider>
  );
};

export default Navigation;
