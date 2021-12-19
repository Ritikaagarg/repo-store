import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import { uniqueNamesGenerator, Config, adjectives, animals } from 'unique-names-generator';
import * as userActions from "../store/actions/user-actions-types";
import Loader from '../components/loader';
import styles from './styles';

const customConfig: Config = {
  dictionaries: [adjectives, animals],
  separator: '-',
  length: 2,
};

const AddRepo = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [repoName, setRepoName] = useState(uniqueNamesGenerator(customConfig))
  const [isLoading, setIsLoading] = useState(false);
  const { createRepo } = props;

  const createRepoHandler = async()=> {
    setIsLoading(true);
    const query = {
      "name": repoName,
      "auto_init": toggleCheckBox
    }
    await createRepo({query: query, callback:()=>{ setIsLoading(false)}})
  }

  return(
    <View style={styles.addRepoContainer}>
        <Text style={{fontSize:18}}>Repository Name (randomly generated)</Text>
        <TextInput
          value={repoName}
          style={styles.repoNameText}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text style={{fontSize:18, marginLeft:10}}>Initialize with readme.md</Text>
        </View>
        <TouchableOpacity 
        onPress={createRepoHandler}
        style={styles.createButton} >
          <Text style={{fontSize:18, color:'#FFF'}}>Create</Text>
        </TouchableOpacity>
        <Loader isLoading={isLoading} />
    </View>
  )
}


export default connect(null, {
  createRepo: userActions.createRepo
})(AddRepo);