import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Login = (props) => {
  const {navigation: { navigate }} = props;

  return(
    <View style={styles.loginContainer}>
      <TouchableOpacity 
        onPress={()=> navigate("Github Login")}
        style={styles.loginText}>
          <Text>Login with Github</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login;