import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  SectionList
} from "react-native";

import styles from "../components/home_styles";
import CardView from "react-native-cardview";
import CourseCard from "../components/CourseCard";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Home"
  };
  initialArr = [
    {
      key: 1,
      teacher: "S.Homana",
      course: "Germana",
      classRoom: "PIII1",
      time: "8:00-9:50"
    },
    {
      key: 2,
      teacher: "S.omana",
      course: "Engleza",
      classRoom: "PIII1",
      time: "8:00-9:50"
    },
    {
      key: 3,
      teacher: "S.Hoana",
      course: "Franceza",
      classRoom: "PIII1",
      time: "8:00-9:50"
    }
  ];
  daysArr = [
    {
      key: 1,
      day:require('../components/images/monday.jpg')
    },
    {
      key: 2,
      day:require('../components/images/tuesday.jpg')
    }
  ];

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
          <View style={styles.story_wrapper}>
            <ScrollView
              horizontal={true}
              bounces={true}
              showsHorizontalScrollIndicator={false}
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
            <Text
              style={{
                marginHorizontal: 15,
                color: "#bbb",
                fontWeight: "bold"
              }}
            >
              {"Feedback cursuri".toUpperCase()}
            </Text>
          </View>
          <View style={styles.schedule_wrapper}>
            <ScrollView
              contentContainerStyle={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              {this.daysArr.map(it => {
                return (
                  <View style={styles.card_style} key={it.key} elevation={8}>
                    <View>
                      <Image
                        style={{ height: 100, width: "100%" }}
                        source={it.day}
                      />
                    </View>
                    {this.initialArr.map(iterator => {
                      return (
                        <CourseCard
                          teacher={iterator.teacher}
                          course={iterator.course}
                          classRoom={iterator.classRoom}
                          time={iterator.time}
                          key={iterator.key}
                        />
                      );
                    })}
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
  renderCard() {
    {
    }
  }
}

export default HomePage;
