 import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

function Login() {
  return (
    <View style={styles.container}>

    <View style={styles.upperContainer}>
        <Text style={styles.title}>MyBooks</Text>
    </View>
    <View style={styles.midContainer}>

      <Text>Email</Text>

      <TextInput
        placeholder='Enter your email'
        style={styles.input}
        onSubmitEditing={(inputData)=>{
          alert(inputData.nativeEvent.text)
        }}
        keyboardType={"email-address"}
      />

      <Text>Password</Text>

      <TextInput
        placeholder='Enter your Password'
        style={styles.input}
        secureTextEntry={true}
      />

    </View>
    <View style={styles.bottomContainer}></View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  upperContainer:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  midContainer:{
    flex:2,
    padding:10,
  },
  bottomContainer:{
    flex:1,
    backgroundColor:'red'
  },

  title:{
      color: 'blue',
      fontWeight: 'bold',
      fontSize:30
  },
  input:{
    borderWidth:1,
    height:50
  }

});


export default Login;