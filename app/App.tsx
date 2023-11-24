import { StatusBar } from 'expo-status-bar';

import Home from './src/screens/Home';
import ListUser from './src/screens/ListUser';

export default function App() {
  return (
    <>
      <StatusBar 
        backgroundColor='transparent'
        translucent
      />
      <Home/>
      {/* <HomeMap/> */}
    </>
  );
}