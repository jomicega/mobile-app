import { NativeBaseProvider, Text } from 'native-base';
import React from 'react';
import Accordion from './src/components/molecules/accordion';

export default function App() {
  return (
    <NativeBaseProvider>
      <Accordion title='Test title'>
        <Text>Test text</Text>
      </Accordion>
    </NativeBaseProvider>
  );
}
