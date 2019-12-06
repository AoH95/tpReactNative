import React, { Component } from 'react';
import { View, Text, TextInput, Button, AsyncStorage } from 'react-native';
import { StyleSheet } from 'react-native';
import { saveUserChoice } from '../redux/actions';
import { connect } from 'react-redux';
import NewsService from '../services/NewsService';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        borderWidth:1, height:40, width:'100%', borderColor:'grey', marginBottom: 10,
    }
});

function mapDispatchToProps(dispatch) {
    return {
        saveUserChoice: (state) => dispatch(saveUserChoice(state)),
    }
}

const mapStateToProps = state => {
    return {
        savedCategory: state.categorie.keyword,
    };
};

class SettingsScreen extends Component {
    newsService = new NewsService;
    state = { categorie: ''} ;

    onChange = (value) => {
        this.setState({ categorie: value });
    }

    save = async() => {
        let news = await this.newsService.getNewsByKeyword(this.state.categorie)
        if(news.data.totalResults !== 0) {
            this.props.saveUserChoice(this.state.categorie);
            this.props.navigation.goBack();
        } else {
            alert(`Cette catégorie n'existe pas`);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Choose categorie</Text>
                <TextInput style={styles.textInput} onChangeText={this.onChange} />
                <Button title="Ajouter" onPress={this.save}/>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
