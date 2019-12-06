import React, { Component } from 'react';
import { View, Text, FlatList, AsyncStorage } from 'react-native';
import { StyleSheet } from 'react-native';
import NewsService from '../services/NewsService';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { getUserCategory } from '../redux/actions';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import NewsItem from '../components/NewsItem';
import { State } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

function mapDispatchToProps(dispatch) {
    return {
        getUserCategory: () => dispatch(getUserCategory()),
    }
}

const mapStateToProps = state => {
    return {
        savedCategory: state.categorie,
        deletedNews: state.categorie.deletedNews
    };
};

class HomeScreen extends Component {
    static navigationOptions = (e) => {
        return {
            title: 'Home',
        }
    }
    state = { data: null};
    newsService = new NewsService;

    componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            this.update();
        });
    }

    componentDidUpdate() {
        // if(this.props.deletedNews) {
        // let newList = this.state.articleCategory;
        // newList.articles.map((e) => {
        //     if(e.title === this.props.deletedNews.article.title)
        //         delete e;
        //     })
        // }
        // return this.setState({
        //     articleCategory: newList
        // });
    }

    update() {
        this.getCategory();
    }

    getCategory() {
        if(this.props.savedCategory.keyword.length > 0) {
            this.props.savedCategory.keyword.map((e)=> {
                this.newsService.getNewsByKeyword(e).then(resp => {
                    this.setState({articleCategory: resp.data})
                })
            });
        }else {
            return;
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                {this.state.articleCategory ? (
                    <View style={styles.container}>
                        <FlatList data={this.state.articleCategory.articles}
                        renderItem={(e) => (
                            <NewsItem key={e.item.title} article={e.item} navigate={navigate}/>
                        )} />
                </View>

                ) : (<Loading displayColor='purple'>
                    <Text>Please choose a category...</Text>
                </Loading>)}
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
