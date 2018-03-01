import React, { Component } from "react";
import {
    View,
    Text,
    Image
} from "react-native";


import EmojiFeedBack from "../components/EmojiFeedBack";
import styles from "../components/home_styles";
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
                <View style={styles.home_wrapper}>
                    <Text>asda</Text>
                    <EmojiFeedBack/>
                </View>
            </View>
        );
    }
}
