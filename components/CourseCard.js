import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "../components/course_card_styles";

class CourseCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
      <View style={styles.course_wrapper}>
        <View style={styles.text_wrapper}>
          <Text style={styles.text_styles}>
            {this.props.course.toUpperCase()}
          </Text>
          <Text style={styles.text_styles}>
            {this.props.teacher.toUpperCase()}
          </Text>
        </View>
        <View style={styles.text_wrapper}>
          <Text style={styles.text_styles}>{this.props.classRoom}</Text>
          <Text style={styles.text_styles}>{this.props.time}</Text>
        </View>
      </View>
      <View style={styles.border_style}/>
      </View>
    );
  }
}
export default CourseCard;
