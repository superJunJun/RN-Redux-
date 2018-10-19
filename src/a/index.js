/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 可以使用redux 也可以使用mobx https://www.jianshu.com/p/c7e06cee4ea6
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  FlatList
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomeContainer extends Component {
  static navigationOptions = {
      title: '主页',
  };

  constructor(props) {
    super(props);
    this.pageIndex = 1;
    this.pageSize = 10;
    this.state = {
      refreshing: true,
    };

    this._onRefresh = this._onRefresh.bind(this);
  };

  componentDidMount() {
    return this._onRefresh();
  };

  _onRefresh() {
    this.setState({refreshing: true});
    fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        refreshing: false,
        dataSource: responseJson.movies,
      });
    })
    .catch((error) => {
      console.error(error);
    });
  };

  toDetail(title, releaseYear) {
    const { navigate } = this.props.navigation;
    navigate('Main',{title, releaseYear});
  };

  render() {
    const { refreshing, dataSource } = this.state;

    if(refreshing){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
          data={dataSource}
          extraData={dataSource}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={false}
          keyExtractor={item => `_${item.id}`}
          renderItem={({ item }) => this.renderInfoItem(item)}
          // onEndReached={this.handleLoadMore}
          // ItemSeparatorComponent={this.renderseparator}
          onEndReachedThreshold={0.3}
          // ListFooterComponent={this.renderListFooter}
        />
      </View>
    );
  };
  renderInfoItem(item) {
    return(
      <TouchableOpacity
      style={styles.item}
      onPress={() => this.toDetail(item.title, item.releaseYear)}
      activeOpacity={0.75}>
        <View style={styles.container}>
          <Text style={styles.header}>{item.title}</Text>
          <Text style={styles.years}>{item.releaseYear}</Text>
        </View>
      </TouchableOpacity>

    )
  };
  handleLoadMore() {
    return <View style={styles.line} />;
  };
  renderseparator() {

  };
  renderListFooter() {
  //   const { isloadMore, dataSource } = this.props;
  //   if (dataSource && dataSource.length < this.pageSize) return null;

  //   if (!isloadMore) return <NoneMore />;

  //   return <LoadingView />;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: '#F5FCFF',
  },
  item: {

  },
  years: {
    padding: 20,
    textAlign: "left",
    color: '#333333',
  },
  years: {
    padding: 20,
    textAlign: "left",
    color: '#333333',
  },
  line: {
    backgroundColor: '#f5f5f5',
    width: '100%',
    paddingHorizontal: 10,
    height: StyleSheet.hairlineWidth,
  },
});
