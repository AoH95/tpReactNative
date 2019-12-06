import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import { storeDeletedNews } from '../redux/actions';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    standaloneRowFront: {
        alignItems: 'center',
        backgroundColor: '#e6e6e6',
        borderBottomWidth: 2,
        borderBottomColor: '#D6D6D6',
        justifyContent: 'center',
        padding: 20,
    },
    standaloneRowBack: {
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    backTextWhite: {
        color: '#FFF',
    }
});

function mapDispatchToProps(dispatch) {
    return {
        storeDeletedNews: (data) => dispatch(storeDeletedNews(data)),
    }
}


class NewsItem extends Component {
    deleteNews() {
        this.props.storeDeletedNews(this.props)
    }

    render() {
        state = {}
        return (
            <SwipeRow leftOpenValue={75} rightOpenValue={-75} key={this.props.article.title} onRowPress={() => this.props.navigate('Details', {article: this.props.article})} onRowOpen={()=>{this.deleteNews(this.props)}}>
                <View style={styles.standaloneRowBack}>
                    <Text style={styles.backTextWhite}>Suppr</Text>
                    <Text style={styles.backTextWhite}>Suppr</Text>
                </View>
                <View style={styles.standaloneRowFront}>
                    <View style={{ flex: 1, alignItems: 'center',justifyContent: 'center'}}>
                        <Text>Titre:{this.props.article.title}{'\n'}</Text>
                        <View style={{ flex: 1}}>
                            <Text>Author:{this.props.article.author}</Text>
                            <Text> - Source: {this.props.article.url}</Text>
                            {<Image style={{margin:20, width: 300, height: 120 }} source={{ uri: this.props.article.urlToImage}} />}
                            <Text> - Date: {this.props.article.publishedAt}</Text>
                        </View>
                    </View>
                </View>
            </SwipeRow>
        )
    }
}

export default connect(null, mapDispatchToProps)(NewsItem);
