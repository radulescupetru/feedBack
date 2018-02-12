import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Alert,
  KeyboardAvoidingView,
  Platform
} from "react-native";

import styles from '../components/styles'

class Register extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.wrapper}>
        <View style={styles.identity}>
          <Image
            style={{ marginBottom: 20, height: 100, width: 120 }}
            source={require("../components/images/emblema.png")}
          />
          <Text style={styles.title}>
            Universitatea Transilvania din Brasov
          </Text>
          <Text style={styles.title}>
            {"Facultatea de Matematica".toUpperCase() +
              "\n" +
              " si Informatica".toUpperCase()}
          </Text>
        </View>

        <KeyboardAvoidingView behavior="padding" style={styles.buttons}>
          <TextInput
            style={{
              height: 35,
              color: "#0360BC",
              backgroundColor: "white",
              width: "80%",
              textAlign: "left",
              padding: 10,
              marginBottom: 30,
             
            }}            
            placeholder={"name@student.unitbv.ro".toUpperCase()}
            underlineColorAndroid= 'transparent'
            keyboardType="email-address"
            onChangeText={text => this.setState({ text })}
          />
          <TextInput
            style={{
              height: 35,
              color: "#0360BC",
              backgroundColor: "white",
              width: "80%",
              textAlign: "left",
              padding: 10,
              marginBottom: 30,
             
            }}            
            placeholder={"password".toUpperCase()}
            underlineColorAndroid= 'transparent'
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={text => this.setState({ text })}
          />
          <Button title="Login" color={Platform.OS=="ios"?"white":"#00b894"}  onPress={()=>navigate('CompleteProfile')}/>
        </KeyboardAvoidingView>

        <View style={styles.credits}>
        <Button
            title="Register"
            color={Platform.OS=="ios"?"white":"#00b894"}
            onPress={()=>navigate('Register')}
          />
        </View>
      </View>
    );
  }
}


export default Register;
