import React, { useState } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,StatusBar,Image,TextInput,Dimensions,ImageBackground,SafeAreaView,ScrollView} from 'react-native'
 //import { ScrollView } from 'react-native-gesture-handler';
//import { SafeAreaView } from 'react-native-safe-area-context';
const {height, width} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  // const [email, setEmail] = useState("");
  //    const [password, setPassword] = useState("");
  //    Validate email = (email) =>{
  //     var Regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  //     if (email ===" "||   email= undefined || email = null);
  //     SetErrorEmail("Please enter email");
  //     els if (Regex.test  (email()){
  //       SetErrorEmail("Please enter valid email");

  //     }
  //     else{
  //       SetErrorEmail(null)
  //     }

  //     }
  //     const Validate = () =>{
  //       const flag =  false;
  //       if(email===" "){
  //         SetErrorEmail(" "),

  //       }
  //       if (password === " "){
  //         SetErrorPassword( " " );
  //     )
  //       }
  return (

    <SafeAreaView>
      <ScrollView>
        <ImageBackground style={{height:height*1,}} source={require('./Image/backg.jpg')}>  
        
    <View>
    <View>
 
    <View style={{height:height/6}}></View>
    <View style={styles.container1}>
      
        <Image style={styles.image} source = {require("./Image/a.png")}/>
      </View>
      <View style={{height:height/6}}></View>
    </View>
    <View style={{alignSelf:'center'}}>
      <Text>Email</Text>
      <View style={{height:15}}></View>
    </View>
    <View style={styles.inputView}>
      
  <TextInput
    style={styles.TextInput}
    placeholder="Enter your email."
    placeholderTextColor="#003f5c"
    onChangeText={(email) => setEmail(email)}
  />
</View>

<View style={{height:25}}></View>
<View style={{alignSelf:'center'}}>
      <Text>Password</Text>
      <View style={{height:15}}></View>
    </View>
<View style={styles.inputView1}>
  <TextInput
    style={styles.TextInput}
    placeholder="Enter your password."
    placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={(password) => setPassword(password)}
  />
</View>
<View style={{height:25}}></View>
<TouchableOpacity>
  <Text style={styles.forgot_button}>Forgot Password</Text>
</TouchableOpacity>
<View style={{height:25}}></View>


<View style={{height:25}}></View>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text
                  style={{
                    fontSize: 20,
              
                    borderWidth: 2,
                    borderRadius: 10,
                    borderColor: 'red',
                    height: 40,
                    width: 70,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
    </View>
    </ImageBackground>
    </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   },
 
   image :{
    borderRadius:100,
    height:150,
    width:150,
 
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 55,
    alignItems: "center",
    fontSize: 20,
      alignSelf: 'center',
  },
  inputView1: {
   backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 55,
    alignItems: "center",
    fontSize: 20,
      alignSelf: 'center',
  },
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    Left: 20,
  },
  forgot_button: {
      fontSize: 20,
      borderColor: 'red',
      height: 40,
      textAlign: 'center',
      fontWeight: 'bold',
      alignSelf: 'center',
    },

 
})

















































// import React,{useState}  from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   SafeAreaView,
//   ScrollView,
//   TextInput,
//   Dimensions
  
  
// } from 'react-native';
// const {height, width} = Dimensions.get('window');



// const HomeScreen = ({navigation}) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const [emailInputError, setEmailInputError] = useState(null);
//   const [emailInputErrorMessage, setEmailInputErrorMessage] = useState(" ");

//   const [passwordInputError, setPasswordInputError] = useState(null);
//   const [passwordInputErrorMessage, setPasswordInputErrorMessage] = useState(" ");
  
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             marginTop: 10,
//             borderRadius: 10,
//             borderWidth: 2,
//           }}>
//           <View>
//             <TouchableOpacity>
//               <Text style={styles.txt}>HOME</Text>
//             </TouchableOpacity>
//           </View>
//           <View>
//             <TouchableOpacity>
//               <Text style={styles.txt}>CARRER</Text>
//             </TouchableOpacity>
//           </View>
//           <View>
//             <TouchableOpacity>
//               <Text style={styles.txt}>ABOUT</Text>
//             </TouchableOpacity>
//           </View>
//           <View>
//             <TouchableOpacity>
//               <Text style={styles.txt}>CONTACT</Text>
//             </TouchableOpacity>
//           </View>
//           <View>
//             <TouchableOpacity>
//               <Text style={styles.txt}>SERVICES</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View>
//           <Text
//             style={{
//               fontSize: 28,
//               fontWeight: 'bold',
//               textAlign: 'center',
//               marginVertical: 50,
//             }}>
//             Register Here
//           </Text>

//         </View>
//         <View style={styles.first}>
//          <View>
//             <View style={styles.first1}> 
//             <Text style={{}}>HEllo Amit</Text>

//           </View>
//          </View>

//         </View>
        

       
//         <View>  
//           <TouchableOpacity 
//           onPress={() => {
//             navigation.navigate('SignIn');
//           }}>
//             <Text>Press HEre</Text>
//           </TouchableOpacity>
//           </View>
//           </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 200,
//   },
//   txt: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     padding:6,
//     color: 'red',
//   },
//   txt1:{
//     fontSize:28,
//     padding:10
    
  

//   },
//   first:{
//     backgroundColor:'green',
//     height:height/9.3,
//     width:width/1.2,
//     alignSelf:'center',
//     borderRadius:10,
    
//   },
//   first1:{
//     backgroundColor:'red',
//     height:height/19.3,
//     width:width/1.3,
//     alignSelf:'center',
//     borderRadius:20,
//     top:10
    
    

//   }
// });
