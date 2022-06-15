/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

// Create a client
const queryClient = new QueryClient();

import Routes from './src/routes';

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;
