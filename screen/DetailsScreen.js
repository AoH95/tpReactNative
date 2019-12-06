import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default class DetailsScreen extends Component {
    static navigationOptions = (e) => {
        return {
            title: 'Fiche Article'
        }
    }
    componentDidMount() {
        this.setState({
            article: this.props.navigation.state.params.article
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state ? (
                    <View style={styles.container}>
                        <Text>{this.state.article.title}{'\n'}</Text>
                        {<Image style={{margin:20, width: 300, height: 120 }} source={{ uri: `${this.state.article.urlToImage}`}} />}
                        <Text>{this.state.article.publishedAt}{'\n'}</Text>
                        <Text>{this.state.article.author}</Text>
                        <Text>{this.state.article.content}{'\n'}</Text>
                    </View>
                ) : (<Text>error</Text>)}
            </View>
        )
    }
}
