import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { connect } from 'react-redux';
import * as userActions from "../store/actions/user-actions-types";
import Loader from '../components/loader';
import styles from './styles';

const Home = (props)=> {
  const {getUserInfo, logout, user, navigation: { navigate }} = props;
  
  
  useEffect(()=>{
    getUserInfo();
  }, [])

  const handleLogout = ()=>{
    logout()
  }

  const handleFaq = ()=> {
    Linking.openURL(user?.html_url)
  }

  const renderItem= (title, onPress)=> {
    return (
      <TouchableOpacity onPress={onPress} style={styles.homeListContainer}>
        <Text style={{fontSize:20}}>{title}</Text>
      </TouchableOpacity>
    )
  }

  return(
    <View style={styles.homeContainer}>
      {user?.avatar_url ? <Image source={{uri: user.avatar_url}} onLoadStart={() => <Loader />} style={{width:100, height:100, marginVertical:25}}/> : null}
      <Text style={styles.displayNameText}>{user?.name ? user.name : "User"}</Text>
      {renderItem("My Repositories", ()=>{navigate("Repos")})}
      {renderItem("Logout", ()=>{handleLogout()})}
      {renderItem("FAQs", ()=>{handleFaq()})}
    </View>
  )
}

const mapStateToProps = ({ user: { user } }) => ({
  user,
});

export default connect(mapStateToProps, {
  getUserInfo: userActions.getUserInfo,
  logout: userActions.logout
})(Home);