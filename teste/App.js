import React from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

const botaoapertado = () => {
  alert('vamo ver isso aqui');
}

const App: () => Node = () => {
  // Aplicativo
  return (
      <View>
        <Text>Aplicativo  </Text>
        <Button
        title="Meus ovos"
        onPress={botaoapertado}
        />
      </View>
    );
};

export default App;
