import { StyleSheet, Text, TextInput, View } from 'react-native';
 function SignUp(){
     return (
         <View style={styles.mainContainer}>
             <View style={styles.firstContainer}>
             <Text style={styles.title}>Sign Up Here !</Text>
             </View>
             <View style={styles.secContainer}>
                   
             </View>
             <View style={styles.thirdContainer}>

             </View>
         </View>
     );
 }

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
    backgroundColor: '#fff',
    
    },

    firstContainer:{
        flex : 1,
        backgroundColor: 'red',
        justifyContent: 'flex-end',
    alignItems : 'center'
    },
    secContainer:{
        flex :2,
        backgroundColor: 'blue'
    },
    thirdContainer:{
        flex : 1,
        backgroundColor: 'pink'
    },
    title : {
        color : 'blue',
        fontSize: 35,
        fontWeight: 'bold'
    }


 });

 export default SignUp;