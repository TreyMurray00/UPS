import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider, useTailwind } from 'tailwind-rn';
import utilities from './tailwind.json';     
import CustomerScreen from './Screens/CustomerScreen';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './Navigator/RootNavigator';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({

  uri: 'https://batavia.stepzen.net/api/iced-grizzly/__graphql',

  cache: new InMemoryCache(),

  headers: {
    Authorization : "apikey batavia::stepzen.io+1000::261969090f5938d8c4061604a988089a37dd855db40f06c0a810205f25bbc2dc"
  }

});

export default function App() {
  
  return (
    //@ts-ignore TailwindProvider missing a type definition
    
      <TailwindProvider utilities={utilities}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <RootNavigator/>
          </NavigationContainer>
        </ApolloProvider>
        
      </TailwindProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
