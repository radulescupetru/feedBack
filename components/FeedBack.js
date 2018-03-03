import React, { Component } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";

import EmojiFeedBack from "../components/EmojiFeedBack";
import styles from "../components/feedback_styles";
export default class FeedBack extends Component {
  static navigationOptions = {
    title: "FeedBack"
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
        <View style={styles.stacked_card} />
        <View style={styles.card_wrapper}>
          <View style={styles.card_content}>
            <View style={styles.text_wrapper}>
              <Text style={styles.card_text}>
                {"S.Homana-Germana".toUpperCase()}
              </Text>
              <Text style={styles.card_text}>{"Clariitate".toUpperCase()}</Text>
              <Text style={styles.card_description}>
                Lorem ipsymaskj jadgj jasgdj jasgja djag j d ajsghdja jawhksj
                dajhgd ajwhgd jashgd jasdjah djaghd jawgdwj ah adka iwdgadas dga
                wdy akdkajsjdga w
              </Text>
            </View>
            <EmojiFeedBack style={styles.emoji} />
          </View>
        </View>
      </View>
    );
  }
}
