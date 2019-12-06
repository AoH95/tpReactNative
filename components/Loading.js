import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';``
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default class Loading extends Component {
    static propTypes = {
        displayColor: PropTypes.string.isRequired
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color={this.props.displayColor} />
                <Text style={{color: this.props.displayColor}}>Loading...</Text>
                {this.props.children}
            </View>
        )
    }
}
