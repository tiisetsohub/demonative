import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../Screens/Home/Home';
import Note from '../Screens/Note/Note';
import CreateNote from '../Screens/CreateNote/CreateNote';

const Stack = createNativeStackNavigator();

export default function AppNavigation({ AppState }) {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="AllNotes" options={{headerShown: false}}>
                    {(props) => <Home {...props} AppState={AppState} />}
                </Stack.Screen>

                <Stack.Screen name="Note" options={{ headerShown: false }}>
                    {(props) => <Note {...props} AppState={AppState} />}
                </Stack.Screen>

                <Stack.Screen name="CreateNote" options={{ headerShown: false }}>
                    {(props) => <CreateNote {...props} AppState={AppState} />}
                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    );
 
}