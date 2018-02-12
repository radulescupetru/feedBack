import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";

import styles from "../components/home_styles";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Home"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.page_wrapper}>
        <View style={styles.header_image}>
          <Image
            style={{ height: 50, width: 60 }}
            source={require("../components/images/emblema.png")}
          />
        </View>
        <View style={styles.home_wrapper}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.story_wrapper}
          >
            <View style={styles.story_item}>
              <Text style={styles.course_title}>{"ptr".toUpperCase()}</Text>
            </View>
            <View style={styles.story_item}>
              <Text style={styles.course_title}>{"teo".toUpperCase()}</Text>
            </View>
            <View style={styles.story_item}>
              <Text style={styles.course_title}>{"stfn".toUpperCase()}</Text>
            </View>
            <View style={styles.story_item}>
              <Text style={styles.course_title}>{"paun".toUpperCase()}</Text>
            </View>
            <View style={styles.story_item}>
              <Text style={styles.course_title}>{"teo".toUpperCase()}</Text>
            </View>
            <View style={styles.story_item}>
              <Text style={styles.course_title}>{"stfn".toUpperCase()}</Text>
            </View>
            <View style={styles.story_item}>
              <Text style={styles.course_title}>{"paun".toUpperCase()}</Text>
            </View>
          </ScrollView>
          <View style={styles.schedule_wrapper} />
        </View>
      </View>
    );
  }
}

export default HomePage;
