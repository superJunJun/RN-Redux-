import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  InteractionManager,
  FlatList,
  RefreshControl,
} from 'react-native';
import NoneMore from '@ui/none-more';

export default class Main extends Component {
  static navigationOptions = {
      title: 'home',
  };
  
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      netWorkError:false,
      pageSize:10,
      pageIndex: 1,
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(()=> {
      this._onRefresh();
    })
  }

  _onRefresh() {
    this.setState({
      pageIndex: 1,
      refreshing: true,
    }, () => this.fetch());
  }

  _loadMoreData() {
    const { moreData } = this.props;

    if (!moreData) return;

    this.setState({
      pageIndex: this.state.pageIndex + 1,
    }, () => this.fetch());
  }

  fetch() {
    const { fetchHomeList } = this.props;
    const params = {
      pageIndex: this.state.pageIndex,
      pageSize: this.state.pageSize,
      recommend: '1',
      lat: '31.166335',
      lon: '121.398001',
      city: '上海市',
      province: '上海',
    };

    fetchHomeList(params).then(res => {
      if (res && res.rows) {
        this.setState({
          refreshing: false,
        });
      }
    })
  }

  render() {
    const { list } = this.props;

    console.log('******2*********' + list.length)

    return (
      <View style={{flex: 1}}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this._onRefresh()}
            />
          }
          data={list}
          extraData={list}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={false}
          keyExtractor={item => `_${item.id}`}
          renderItem={({ item }) => this.renderInfoItem(item)}
          onEndReached={() => this._loadMoreData()}
          ItemSeparatorComponent={this.renderseparator}
          onEndReachedThreshold={0.3}
          ListFooterComponent={this.renderListFooter}
        />
      </View>
    );
  }

  renderInfoItem(item) {
    return(
      <TouchableOpacity
      style={styles.item}
      onPress={() => this.toDetail(item.title, item.releaseYear)}
      activeOpacity={0.75}>
        <View style={{flexDirection: "row"}}>
          <Image style = {styles.itemImage} source={{uri: item.img}}></Image>
          <View style={styles.titleView}>
            <Text style={styles.title}>{item.recName}</Text>
            <Text style={styles.location}>{item.city?item.city:''}</Text>
          </View>
        </View>
        <View style={styles.timeView}>
          <Text style={styles.payment}>{item.payment}</Text>
          <Text style={styles.releaseTime}>{item.releaseTime}</Text>
        </View>
      </TouchableOpacity>

    )
  };
  renderseparator = () => {
    return <View style={styles.line} />;
  };
  renderListFooter = () => {
    const { moreData, list } = this.props;
    if (!moreData && list.length) return <NoneMore />
    return <NoneMore contents={'加载中'}/>
  }

  toDetail() {
    const { navigate } = this.props.navigation;
    navigate('Detail');
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 115,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
  },
  itemImage: {
    width: 75,
    height: 75,
    paddingLeft: 15,
    resizeMode: 'contain',
    backgroundColor: '#bdbdbd'
  },
  titleView: {
    paddingLeft: 15,
    fontSize: 14,
    height: 75,
  },
  title: {
    color: '#333',
    fontSize: 16,
    paddingTop:10,
  },
  location: {
    color: '#999',
    paddingTop:25,
  },
  timeView: {
    paddingRight: 15,
    fontSize: 14,
    height: 75,
  },
  payment: {
    color: 'red',
    fontSize: 16,
    textAlign:"right",
    paddingTop: 10,
  },
  releaseTime: {
    paddingTop: 25,
    color: '#999',
    textAlign:"right",
  },
  line: {
    backgroundColor: '#f5f5f5',
    width: '100%',
    paddingHorizontal: 10,
    height: StyleSheet.hairlineWidth,
  },

});