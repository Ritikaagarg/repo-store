import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import Config from "react-native-config";
import Loader from '../components/loader';
import { connect } from 'react-redux';
import * as userActions from "../store/actions/user-actions-types";

const GithubLogin =(props)=>{
  const client_id = Config.GITHUB_CLIENT_ID;
  const [code, setCode] = useState("");
  let webviewRef = null as any;
  const {login} = props;

  const handleWebViewNavigationStateChange= (newNavState)=> {
    const {url} = newNavState;
    if(!url) return;

    if(url.includes('?code=')){
      webviewRef.stopLoading()
      const codeReceived = url.split("?code=")[1];
      setCode(codeReceived);
      login({code: codeReceived})
    }
  }

  return (
    <WebView
      ref={(ref)=>webviewRef=ref}
      startInLoadingState={true}
      renderLoading={() => <Loader isLoading={true}/>}
      originWhitelist={['https://*', 'git://*']}
      source={{uri: `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=user%20repo`}}
      onNavigationStateChange={handleWebViewNavigationStateChange}
    />
  )
}

const mapStateToProps = ({ user: { loginError } }) => ({
  loginError,
});

export default connect(mapStateToProps, {
  login: userActions.login,
})(GithubLogin);