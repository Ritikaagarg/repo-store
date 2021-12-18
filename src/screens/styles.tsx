import { StyleSheet, Dimensions } from "react-native";

const{ width, height } =  Dimensions.get('window');

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    paddingHorizontal: width*0.05,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#E1E1E1',
    justifyContent:'space-between'
  },
  contentWrapper: {
    justifyContent: "space-between",
    paddingRight: width*0.01,
    width: width * 0.7
  },
  txtName: {
    fontSize: 18,
    fontWeight:'bold'
  },
  txtName1: {
    fontSize: 18,
  },
  txtEmail: {
    color: "#777",
    marginTop: height*0.005
  },
  searchBox: {
    margin: 10, 
    borderColor: '#555', 
    borderWidth: 1,
    flexDirection:'row',
    alignItems:'center'
  },
  searchInput:{
    width: width*0.75,
    height: height* 0.07,
    paddingHorizontal:width*0.04,
    fontSize: 16
  },
  loginContainer: {
    flex:1, 
    justifyContent:'center', 
    alignItems:'center' 
  },
  loginText: {
    justifyContent:'center', 
    alignItems:'center', 
    backgroundColor:"#888", 
    padding: 20, 
    borderRadius: 5
  },
  homeContainer: {
    alignItems:"center", 
    flex:1 
  },
  displayNameText: {
    fontSize:20, 
    marginBottom:20
  },
  homeListContainer: {
    width:'100%', 
    alignItems:'center', 
    paddingVertical:20, 
    borderTopWidth:1, 
    borderColor:'#888'
  },
});

export default styles;

