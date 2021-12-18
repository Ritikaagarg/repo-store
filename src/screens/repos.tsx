import React, { useEffect, useState } from 'react';
import {View, TextInput, Button, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';
import * as userActions from "../store/actions/user-actions-types";
import Loader from '../components/loader';
import moment from 'moment';
import styles from './styles';

const Repos = (props)=>{

  const {getRepos} = props;
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  // Render each repository detail
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemWrapper}>
        <View style={styles.contentWrapper}>
          <Text style={styles.txtName}>{item.name}</Text>
          <Text style={styles.txtEmail}>{item.description}</Text>
          <Text style={styles.txtEmail}>Created at - {moment(item.created_at).format('DD/MM/YYYY')}</Text>
        </View>
        <Text style={styles.txtName1}>{item.private? "Private": "Public"}</Text>
      </View>
    );
  };

  // Search through the repository list
  const onSearch = ()=> {
    const newData = data?.filter(item=>{
      const searchText = search.toUpperCase();
      const repoNames = item?.name?.toUpperCase();
      return repoNames?.indexOf(searchText) > -1;
    })
    setData(newData);
  }

  // Fetch the repository data
  const fetchData = ()=>{
    setIsLoading(true);
    getRepos({callback:(result)=>setData(result)});
    setIsLoading(false);
  }

  useEffect(()=>{
    fetchData()
  }, [])

  return(
    <View>
      <View style={styles.searchBox}>
        <TextInput 
        style={styles.searchInput}
        onChangeText={(name)=> setSearch(name)}
        placeholder="Type here"
        autoCorrect={false}
        />
        <Button onPress={onSearch} title="Search" />
      </View>
      {isLoading? <Loader isLoading={isLoading}/> : 
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) =>item.id }
        onEndReachedThreshold={0.5}
        onRefresh={fetchData}
        refreshing={isLoading}
        ListEmptyComponent={ data.length===0 && !isLoading ? <Text style={{textAlign:'center'}}>No Repositories found</Text>: null}
      />}
    </View>
  )
}

export default connect(null, {
  getRepos: userActions.getRepos,
})(Repos);