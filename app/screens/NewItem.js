import React, { useState } from 'react';

import {StyleSheet, View,Text, Image, Pressable,Modal, TouchableWithoutFeedback, TextInput, Button} from 'react-native';

function NewItem(props) {
    const [modalVisible, setModalVisible] = useState(true);
    // const [text, setText] = useState('');

    const handleSubmit = () => {
      // Here you can handle the submission of the text
      console.log('Submitted text:', text);
    };
    return (
     <>
     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
             <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={{...styles.modalView,backgroundColor:'white'}}>
<Text>Add a New Item</Text>
<TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Enter text"
        // onChangeText={setText}
      />
      <Button
        onPress={handleSubmit}
        title="Submit"
      />
          </View>
          

        </View>
        </TouchableWithoutFeedback>
      </Modal>
     
     </>
    );
}
const styles = StyleSheet.create({
    badgeContainer: {
    position: 'absolute',
    right: 20, // Adjust as needed
    top: 2, // Adjust as needed
    backgroundColor: 'red', // Choose your color
    borderRadius: 10,
    width: 20, // Adjust size as needed
    height: 20, // Adjust size as needed
    justifyContent: 'center',
    alignItems: 'center'
},
 badgeText: {
    color: 'white',
    fontSize: 10, // Adjust text size as needed
},
    modalView: {
        height:'80%',
        top:'20%',
        justifyContent:'center',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
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
    shopItem:{
        margin:2,
        backgroundColor:'#FBFCFD',
        borderRadius:10,
        height:200,
        flexWrap:'wrap',
        marginBottom:5


    },
    backgroundImage:{
        backgroundColor:'white',
        flex:1,
        height:200,
        borderRadius:10,
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Black color with 50% opacity
        flex: 1,
        borderRadius:10,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header1:{
        fontWeight:'medium',
        fontSize:20
    },
    categoryImg:{
     flex:4,
     
     justifyContent:'center',
     alignItems:'center'
    },
    categoryText:{
        justifyContent:"center",
        alignItems:"center",
     flex:6,
    },
    mainDiv: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollView: {
        flex: 1,
        padding:10,
        backgroundColor:'white'
    },
    category:{
        flexDirection:'row',
        height:200,
        borderRadius:10,
        marginBottom:10,
        backgroundColor:'#F3F3F3'
    },
    bottomNav: {
        marginBottom:15,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default NewItem;