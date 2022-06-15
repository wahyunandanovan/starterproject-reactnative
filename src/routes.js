import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GlobalContext} from './core/context';
import Dashboard from './screens/Home/index';

const Stack = createNativeStackNavigator();

function routes() {
  const [userId, setUserId] = React.useState();

  return (
    <GlobalContext.Provider
      value={{
        userId,
        setUserId,
      }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContext.Provider>
  );
}

export default routes;
