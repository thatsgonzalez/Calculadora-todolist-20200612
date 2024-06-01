import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [Txt1, setTxt1] = useState('');
  const [Txt2, setTxt2] = useState('');
  const [Resultado, setResultado] = useState('');


  const sumar = () => {
    let val = parseFloat(Txt1) + parseFloat(Txt2);
    setResultado(val)
  }

  const restar = () => {
    let val = parseFloat(Txt1) - parseFloat(Txt2);
    setResultado(val)
  }

  const multiplicar = () => {
    let val = parseFloat(Txt1) * parseFloat(Txt2);
    setResultado(val)
  }

  const dividir = () => {
    let val = parseFloat(Txt1) / parseFloat(Txt2);
    setResultado(val)
  }

  const reset = () => {
    setTxt1('')
    setTxt2('')
    setResultado('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.MainTitle}>Calculadora</Text>
      <>
        <View>
          <TextInput
            style={styles.Input}
            value={Txt1}
            onChangeText={setTxt1}
            keyboardType="numeric"
            placeholder="Numero 1" />

          <TextInput
            style={styles.Input}
            value={Txt2}
            onChangeText={setTxt2}
            keyboardType="numeric"
            placeholder="Numero 2" />
        </View>
        <View style={styles.ButtonsContainer}>
          <TouchableOpacity style={styles.sum} onPress={sumar}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
          <TouchableOpacity style={styles.rest} onPress={restar}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
          <TouchableOpacity style={styles.mult} onPress={multiplicar}><Text style={styles.buttonText}>*</Text></TouchableOpacity>
          <TouchableOpacity style={styles.div} onPress={dividir}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.reset} onPress={reset}><Text style={styles.buttonText}>Reset</Text></TouchableOpacity>
        <Text style={styles.Resultado}>{Resultado}</Text>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'antiquewhite',
    alignItems: 'center',
    justifyContent: 'start',
    padding: 70
  },
  MainTitle: {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  Input: {
    backgroundColor: 'white',
    height: 70,
    width: 200,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20
  },
  ButtonsContainer: {
    marginTop: 40,
    flexDirection: 'row',
    width: 270,
    height: 40,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  sum: {
    marginLeft: 3,
    marginRight: 3,
    width: '20%',
    backgroundColor: '#7453f5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rest: {
    marginLeft: 3,
    marginRight: 3,
    width: '20%',
    backgroundColor: '#f553a9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mult: {
    marginLeft: 3,
    marginRight: 3,
    width: '20%',
    backgroundColor: '#5394f5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  div: {
    marginLeft: 3,
    marginRight: 3,
    width: '20%',
    backgroundColor: '#f59c53',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Resultado: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30
  },
  reset: {
    width: 230,
    marginTop: 6,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53c7f5'
  }
});
