
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';

// Formatações
const Estilos = {
  bg: {
    flex: 1,
    backgroundColor: 'white',
  },
  topo: {
    flex: 0.1,
    fontSize: 50,
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'left',
  },
  conteudo: {
    fontSize: 50,
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'left',
  },
  rodape: {
    fontSize: 50,
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'left',
  },
  iosbutton: {
    color: 'skyblue',
    alignSelf: 'center',
    padding: 10,
    borderColor: 'skyblue',
    borderWidth: 1,
    borderRadius: 12
  }
};

var botaopress = () => {
  Alert.alert('pressionado', 'subtitulo');
}

const App: () => Node = () => {
  return (
      <View style= {Estilos.bg }>
        <TouchableOpacity onPress={botaopress}>
          <Text style={Estilos.iosbutton} >E esse aqui</Text>
        </TouchableOpacity>
      </View>
    );
};


export default App;
