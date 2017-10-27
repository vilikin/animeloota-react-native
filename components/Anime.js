import React from 'react';
import {View, StyleSheet, Image, Text} from "react-native";

export default class Anime extends React.Component {
    render() {
        return <View style={styles.container}>
            <Image style={styles.image} source={{uri: this.props.picture}}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{this.props.name}</Text>
                <Text style={styles.description}>{this.props.description}</Text>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        marginTop: 8,
        marginHorizontal: 8,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        height: 80,
        width: 80,
        margin: 4
    },
    textContainer: {
        marginLeft: 16,
        flexDirection: "column",
        justifyContent: "center"
    },
    title: {
        fontSize: 16,
        color: "#ff6f00"
    }
});