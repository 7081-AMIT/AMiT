import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const Account = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <View style={{height: 40}}></View>
            <Text style={{alignSelf: 'center', fontSize: 20}}>
              {' '}
              Create your account
            </Text>
          </View>
          <View style={{height: 40}}></View>
          <View
            style={{
              //backgroundColor: 'green',
              height: 120,
              justifyContent: 'center',
            }}>
            <View>
              <View
                style={{
                  // backgroundColor: 'red',
                  height: 40,
                  width: width / 1.2,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Name</Text>
              </View>
              <View style={{height: 10}}></View>
              <View
                style={{
                  //backgroundColor: 'black',
                  height: 50,
                  width: width / 1.2,
                  alignSelf: 'center',
                  borderWidth: 2,
                  borderColor: 'black',
                }}>
                <View>
                  <View style={{height: 10}}></View>
                  <View
                    style={{
                      // backgroundColor: 'white',
                      height: 30,
                      width: width / 1.3,
                      alignSelf: 'center',
                    }}>
                    <TextInput
                      placeholder="Name"
                      placeholderTextColor={'red'}
                      style={styles.input}></TextInput>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                // backgroundColor: 'red',
                height: 40,
                width: width / 1.2,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Email Address
              </Text>
            </View>
            <View style={{height: 10}}></View>
            <View
              style={{
                //backgroundColor: 'black',
                height: 50,
                width: width / 1.2,
                alignSelf: 'center',
                borderWidth: 2,
                borderColor: 'black',
              }}>
              <View>
                <View style={{height: 10}}></View>
                <View
                  style={{
                    // backgroundColor: 'white',
                    height: 30,
                    width: width / 1.3,
                    alignSelf: 'center',
                  }}>
                  <TextInput
                    placeholder="Email Address"
                    placeholderTextColor={'red'}
                    style={styles.input}></TextInput>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
               // backgroundColor: 'red',
                height: 40,
                width: width / 1.2,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Password</Text>
            </View>
            <View style={{height: 10}}></View>
            <View
              style={{
                // backgroundColor: 'black',
                height: 50,
                width: width / 1.2,
                alignSelf: 'center',
                borderWidth: 2,
                borderColor: 'black',
              }}>
              <View>
                <View style={{height: 10}}></View>
                <View
                  style={{
                    //backgroundColor: 'white',
                    height: 30,
                    width: width / 1.3,
                    alignSelf: 'center',
                  }}>
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor={'red'}
                    style={styles.input}></TextInput>
                </View>
              </View>
            </View>
            <View style={{height: 20}}></View>
            <View
              style={{
                //backgroundColor: 'red',
                height: 40,
                width: width / 1.2,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Date of Birth</Text>
            </View>
            <View
              style={{
                height: 60,
                //backgroundColor: 'red',
               width: width / 1.2,
                alignSelf: 'center',
              }}>
              <View style={{height: 10}}></View>
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <View
                  style={{
                    height: 40,
                    backgroundColor: '#122C2F',
                    width: width / 4.5,
                  }}>
                      <View style={{height: 10}}></View>
                  <TextInput
                    placeholder="D D"
                    placeholderTextColor={'white'}
                    style={{textAlign: 'center'}}></TextInput>
                </View>
                <View style={{width: 35}}></View>
                <View
                  style={{
                    height: 40,
                    backgroundColor: '#122C2F',
                    width: width / 4.5,
                  }}>
                       <View style={{height: 10}}></View>
                  <TextInput
                    placeholder="M M"
                    placeholderTextColor={'white'}
                    style={{textAlign: 'center'}}></TextInput>


                  </View>
                <View style={{width: 35}}></View>
                <View
                  style={{
                    height: 40,
                    backgroundColor: '#122C2F',
                    width: width / 4.5,
                  }}>
                       <View style={{height: 10}}></View>
                  <TextInput
                    placeholder="Y Y"
                    placeholderTextColor={'white'}
                    style={{textAlign: 'center'}}></TextInput>



                  </View>
              </View>
            </View>
          </View>
          <View style={{height: 40}}></View>
          <View>
            <View
              style={{flexDirection: 'row', alignSelf: 'center', right: 20}}>
              <TouchableOpacity>
                <Text>✅</Text>
              </TouchableOpacity>

              <Text> Accept Our </Text>

              <TouchableOpacity>
                <Text style={{color: 'blue'}}> Termes and Condition</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: 60}}></View>
          <View
            style={{
              backgroundColor: '#5899A0',
              height: 50,
              width: width / 1.2,
              alignSelf: 'center',
            }}>
            <View style={{height: 10}}></View>
            <View
              style={{
                // backgroundColor: 'white',
                height: 30,
                width: width / 1.4,
                alignSelf: 'center',
              }}>
              <TouchableOpacity>
                <Text style={{textAlign: 'center', fontSize: 20}}>
                  Create From Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  input: {
    fontSize: 15,
  },
});
