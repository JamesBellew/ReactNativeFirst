import React, { useState } from 'react';
import {  Text, View , Image,StyleSheet,Alert, Modal, Pressable} from 'react-native';
function WelcomeScreen({navigation}) {

  const [modalVisible, setModalVisible] = useState(false);
  const loginHandler=()=>{
    setModalVisible(true)
    console.log('clicked');
  }
  const userLoginHanlder = ()=>{
    setModalVisible(false)
    navigation.navigate('Home')
  }

    return (
        <>
        <View
        
        style={{
          backgroundColor:"#fff",
          
          flex:1
        }}>
          
     

        <View
        
        style={{
          backgroundColor:"#fff",
          height:'20%',
          padding:20,
          alignContent:"center",
          alignItems:"center",
          justifyContent:"center",
          top:200
        }}>
          <Image
          style={{
            height:100,
            width:100
          }}
          source={require('../assets/favicon.png')}/>
        <Text
        
        style={{
          padding:20,
          fontSize:20,
          fontWeight:'bold'
        }}
        >See What You Don't Need</Text>
        
        </View>
        <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Welcome Back, James 😀 </Text>
     
          
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Login With Google</Text>
            </Pressable> */}
                
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={userLoginHanlder }

              
              >
              <Text style={styles.textStyle}>Login With Google</Text>
            </Pressable>
         
          </View>
        </View>
      </Modal>

    </View>

        
        </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  flex:1,
                  flexDirection:"row",
                  justifyContent:"flex-end",
                  alignContent:"flex-end",
                  alignItems:"center",
                  flexWrap:"wrap"
                }}
              >
        
                <View
                style={{
                  backgroundColor:"indigo",
                  height:75,
                  flexGrow:1,
                  justifyContent:"center",
                width:'100%'
                  // width:100
                }}
                >
                <Text
        style={{
          textAlign:"center",
          fontSize:20,
          color:'white',
          fontWeight:'bold'
        }}
        >Sign Up</Text>
        
                </View>
        
                <View
                style={{
                  backgroundColor:"#fff",
                  height:75,
                  flexGrow:1,
                  justifyContent:"center",
                  width:100
                }}
                >
        {/* <Text
        style={{
          textAlign:"center",
          fontSize:20,
          color:'white',
          fontWeight:'bold'
        }}
        >Login</Text> */}
 <Pressable style={styles.loginButton} onPress={loginHandler}>
      <Text style={styles.loginText}>Login</Text>
    </Pressable>
                </View>
                
              </View>
        
        </>
    );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  loginButton: {
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,

    elevation: 3,
    backgroundColor: 'purple',
  },
  loginText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'purple',
    paddingHorizontal:20,
    marginBottom:10
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  screenContainer: {
    backgroundColor:'lightblue',
    flex: 1,
    justifyContent: "center",
    padding: 16
  }
});
export default WelcomeScreen;