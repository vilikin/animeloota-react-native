import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Constants} from 'expo'

export default class App extends React.Component {
    state = {
        animes: [
            {
                name: "Naruto",
                description: "Valtsun suosikki anime",
                picture: "https://i.pinimg.com/originals/52/5e/81/525e8147f8b2e37f8fc1b662dbf7722f.png",
                episode: 1,
                season: 1
            },
            {
                name: "Boruto",
                description: "Valtsun suosikki anime",
                picture: "https://i.pinimg.com/originals/52/5e/81/525e8147f8b2e37f8fc1b662dbf7722f.png",
                episode: 1,
                season: 1
            },
            {
                name: "Umaru",
                description: "Valtsun suosikki anime",
                picture: "https://i.pinimg.com/originals/52/5e/81/525e8147f8b2e37f8fc1b662dbf7722f.png",
                episode: 1,
                season: 1
            },
            {
                name: "Sword Art Online",
                description: "Valtsun suosikki anime",
                picture: "https://i.pinimg.com/originals/52/5e/81/525e8147f8b2e37f8fc1b662dbf7722f.png",
                episode: 1,
                season: 1
            },
            {
                name: "Attack on Titan",
                description: "Valtsun suosikki anime",
                picture: "https://i.pinimg.com/originals/52/5e/81/525e8147f8b2e37f8fc1b662dbf7722f.png",
                episode: 1,
                season: 1
            }
        ]
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>ANIMELOOTA</Text>
                </View>

                <ScrollView style={styles.list}>
                    {
                        this.state.animes.map(anime => (
                            <Anime {...anime}/>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: "#ff6f00"
    },
    headerContainer: {
        marginTop: Constants.statusBarHeight,
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        backgroundColor: "#ffffff"
    },
    headerText: {
        fontSize: 20,
        color: "#ff6f00"
    }
});