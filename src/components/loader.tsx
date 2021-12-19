import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const loader = ({isLoading}) => {
  return (
    <View style={styles.loader}>
    {isLoading ?
      <ActivityIndicator size="large"  />
      : null}
    </View>
  )
  ;
};

export default loader;

const styles = StyleSheet.create({
  loader: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFF'
  },
})