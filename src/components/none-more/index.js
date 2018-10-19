import React from 'react';
import { View, Text, StyleSheet }from 'react-native';

export default NoneMore = (props) => {
    const data = props.contents ? props.contents : '没有更多了';
    return (
      <View style={styles.container}>
        <View style={styles.hr}></View>
        <Text style={styles.content}>{data}</Text>
        <View style={styles.hr}></View>
      </View>
    )
}

const styles = StyleSheet.create( {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 49,
      backgroundColor: '#eee',
    },
    content: {
      fontSize: 14,
      color: '#999',
      marginLeft: 10, marginRight: 10
    },
    hr: {
      width: 32,
      height: 1,
      backgroundColor: '#999',
    },
  })