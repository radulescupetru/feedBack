import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button
} from "react-native";


class Login extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style = {styles.identity}>
          <Image style={{"marginBottom":20,"height":100,"width":120}}source={require("../components/images/emblema.png")} />
          <Text style={styles.title}>
            Universitatea Transilvania din Brasov
          </Text>
          <Text style={styles.title}>
            {"Facultatea de Matematica".toUpperCase() +
              "\n" +
              " si Informatica".toUpperCase()}
          </Text>
        </View>

        <View style = {styles.buttons}>
          <TextInput
            style={{
              height: 40,
              color: "#0360BC",
              backgroundColor: "white",
              width: "80%",
              textAlign: "left",
              padding: 10,
              marginBottom:30
            
            }}
            placeholder={"email".toUpperCase()}
            onChangeText={text => this.setState({ text })}
          />
          <Button title="Login" color="white" />
        </View>

        <View style = {styles.credits}>
          <Text style={{color:"white"}}>{"FeedbackApp".toUpperCase()}</Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    width:"100%",
    height:"80%",   
    backgroundColor: "#0360BC"
  },
  title: {
    color: "white",
    fontSize: 16,
    textAlign: "center"
  },
  identity: {
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  buttons:{
    flex:1,
    marginTop:-100,
    alignItems:"center",
    justifyContent:"center",
    width:"90%"
  }

});
export default Login;
