import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const loader = (isLoading) => {
  return (
    isLoading ?
      <View style={styles.loader}>
        <ActivityIndicator size="large"  />
      </View> : null
  );
};

export default loader;

const styles = StyleSheet.create({
  loader: {
    flex:1,
    justifyContent:'center',
    backgroundColor:'#FFF',
    alignItems:'center'
  },
})