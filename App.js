import React from 'react';
import { SafeAreaView } from 'react-native';
import InventoryCountSheet from './src/screens/InventoryCountSheet';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <InventoryCountSheet />
    </SafeAreaView>
  );
};

export default App;
