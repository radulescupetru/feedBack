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
  SectionList,
  TouchableHighlight
} from "react-native";

import styles from "../components/home_styles";
import CourseCard from "../components/CourseCard";
import axios from "axios";
const { timetable } = [];
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  static navigationOptions = {
    title: "Home"
  };

  getTimeTable() {
    var self = this;
    var localTimeTable = [];
    axios
      .get(
        "http://wickedapp.azurewebsites.net/Home/GetAppointmentsForStudent?id=70"
        // "http://wickedapp.azurewebsites.net/Home/GetAppointmentsForTeacher?id=443"
        
      )
      .then(function(response) {
        console.log("First");
        let time = eval(response.data);
        for (var i in time) {
          for (var j in time[JSON.parse(i)]) {
            if (Array.isArray(time[JSON.parse(i)][j])) {
              localTimeTable.push({
                key: JSON.parse(i),
                value: time[JSON.parse(i)][j]
              });
            }
          }
        }
      })
      .then(function() {
        console.log("second");
        timetable = localTimeTable;
        self.setState({ loaded: true });
      })
      .catch(function(error) {
        console.warn(error);
      });
  }
  componentWillMount() {
    this.getTimeTable();
  }

  daysArr = [
    {
      key: 0,
      day: require("../components/images/monday.jpg")
    },
    {
      key: 1,
      day: require("../components/images/tuesday.jpg")
    },
    {
      key: 2,
      day: require("../components/images/wednesday.png")
    },
    {
      key: 3,
      day: require("../components/images/thursday.jpg")
    },
    {
      key: 4,
      day: require("../components/images/friday.jpg")
    },
    {
      key: 5,
      day: require("../components/images/monday.jpg")
    },
    {
      key: 8,
      day: require("../components/images/tuesday.jpg")
    },
    {
      key: 9,
      day: require("../components/images/wednesday.png")
    },
    {
      key: 10,
      day: require("../components/images/thursday.jpg")
    },
    {
      key: 11,
      day: require("../components/images/friday.jpg")
    }
  ]

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
                <TouchableHighlight onPress={() => this.showFeedBack()}>
                  <Text style={styles.course_title}>{"ptr".toUpperCase()}</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.story_item}>
                <TouchableHighlight>
                  <Text style={styles.course_title}>{"ptr".toUpperCase()}</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.story_item}>
                <TouchableHighlight>
                  <Text style={styles.course_title}>{"ptr".toUpperCase()}</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.story_item}>
                <TouchableHighlight>
                  <Text style={styles.course_title}>{"ptr".toUpperCase()}</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.story_item}>
                <TouchableHighlight>
                  <Text style={styles.course_title}>{"ptr".toUpperCase()}</Text>
                </TouchableHighlight>
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
          {this.state.loaded ? (
            <View style={styles.schedule_wrapper}>
              <ScrollView
                contentContainerStyle={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                {this.daysArr.map((it,idx) => {
                  return (
                    <View style={styles.card_style} key={it.key} elevation={8}>
                      <View>
                        <Image
                          style={{ height: 100, width: "100%" }}
                          source={it.day}
                        />
                      </View>
                      {timetable[idx]["value"].map(iter => {

                        return (
                          <CourseCard
                            teacher={iter["Teacher"]}
                            course={iter["ClassName"]}
                            classRoom={iter["ClassRoom"]}
                            time={iter["Time"]}
                            key={iter["Key"]}
                          />
                        );
                      })}
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          ) : (
            <View />
          )}
        </View>
      </View>
    );
  }
  showFeedBack() {
    const { navigate } = this.props.navigation;
    navigate("FeedBack");
  }
}

export default HomePage;
