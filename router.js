import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TelaContato from './Telas/TelaContato';
import TelaComeco from './Telas/TelaComeco';


const Stack = createStackNavigator();

export default function Router(){

    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack name="TelaComeco" component={TelaComeco}/>
            <Stack.Screen name="TelaContato" component={TelaContato}/>
            


        </Stack.Navigator>
    </NavigationContainer>
    )
  
}