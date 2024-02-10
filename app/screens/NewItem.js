import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, View,Text, Image, Pressable,Modal, TouchableWithoutFeedback, TextInput, Button} from 'react-native';

function NewItem(props) {
    const [modalVisible, setModalVisible] = useState(true);
    // const [text, setText] = useState('');
    const [selectedCategoryValue, setSelectedValue] = useState(null);
    const [newItemName, setNewItemName] = useState('');
    const [newItemPrice, setNewItemPrice] = useState('');
    const [newItemDesc, setNewItemDesc] = useState('');
    const [newItemStock, setNewItemStock] = useState(1);

    //this bit here if for form validation
    const [stockFormValidation,setStockFormValidation] = useState(false)
    const [priceFormValidation,setPriceFormValidation] = useState(false)
    const [nameFormValidation,setNameFormValidation] = useState(false)
    const [descFormValidation,setDescFormValidation] = useState(false)

    const categories = [
      { label: 'Clothing', value: 'Clothing' },
      { label: 'Jumpers', value: 'Jumpers' },
      { label: 'Kicks', value: 'Kicks' },
      { label: 'Equipment', value: 'Equipment' },

  ];
    const handlePriceChange = (text) => {
      const filteredText = text.replace(/[^0-9.]/g, ''); // Allows numbers and decimal point
      if(filteredText.length >= 1){
        setPriceFormValidation(true)
      }else{
        setPriceFormValidation(false)
      }
      setNewItemPrice(filteredText);
  };
  const handleNameChange = (text) => {
  
    if(text.length >= 1){
      setNameFormValidation(true)
    }else{
      setNameFormValidation(false)
    }
    setNewItemName(text);
};

const handleDescChange = (text) => {

  if(text.length >= 1){
    setDescFormValidation(true)
  }else{
    setDescFormValidation(false)
  }
  setNewItemDesc(text);
};
  const handleStockChange = (text) => {
    const filteredText = text.replace(/[^0-9.]/g, ''); // Allows numbers and decimal point
    if(filteredText.length >= 1){
      setStockFormValidation(true)
    }else{
      setStockFormValidation(false)
    }
    setNewItemStock(filteredText);
};
    const handleSubmit = () => {
      // console.log('Submitted Name:', newItemName);
      // console.log('Submitted Price:', newItemPrice);
      // console.log('Submitted Description:', newItemDesc);




      const itemData = {
        name: newItemName,
        price: newItemPrice,
        description: newItemDesc,
        stock:newItemStock,
        category:selectedCategoryValue,
        img: require('../assets/jacket.png'),
        // Add other fields if necessary
    };

    // Call the parent callback function with the new item data
    props.onNewItemSubmit(itemData);
      // Add submission logic here
  };
    return (
     <>
     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed boiii.');
          setModalVisible(!modalVisible);
        }}>
             <TouchableWithoutFeedback onPress={() => setModalVisible(false)}> 
         
        <View style={styles.centeredView}>
          <View style={{...styles.modalView,backgroundColor:'white'}}>
            <View style={{flex:1,flexDirection:'column', width:'100%'}}>

            <View style={{flex:4}}>
              <Text style={{padding:10}}>Item Name</Text>
            <View
      style={{
        backgroundColor: newItemName,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
        <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={handleNameChange} // Corrected
            value={newItemName}
            style={
              nameFormValidation == true ?
              styles.formInputGood
            : styles.formInputBad
            }
        />

    </View>
    <Text style={{padding:10,marginTop:10}}>Item Price</Text>
            <View
      style={{
        backgroundColor: newItemPrice,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
             <TextInput
                            editable
                            keyboardType='numeric'
                            onChangeText={handlePriceChange}
                            value={newItemPrice}
                            style={
                              priceFormValidation == true ?
                              styles.formInputGood
                            : styles.formInputBad
                            }
                        />

    </View>

    <Text style={{padding:10,marginTop:10}}>Item desc</Text>
            <View
      style={{
        backgroundColor: newItemDesc,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
         <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={handleDescChange} // Corrected
            value={newItemDesc}
            style={
              descFormValidation == true ?
              styles.formInputGood
            : styles.formInputBad
            }
        />
    </View>
    <Text style={{padding:10,marginTop:10}}>Item Stock</Text>
            <View
      style={{
        backgroundColor: newItemStock,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
             <TextInput
                            editable
                            keyboardType='numeric'
                            onChangeText={handleStockChange}
                            value={newItemStock}
                            style={
                              stockFormValidation == true ?
                              styles.formInputGood
                            : styles.formInputBad
                            }
                        />

    </View>

    <View style={{ backgroundColor:'#f1f1f1', padding:10,marginTop:20,borderRadius:10}}>
            <RNPickerSelect
                onValueChange={(value) => setSelectedValue(value)}
                items={categories}
                placeholder={{ label: 'Select a category', value: null }}
            />
        </View>
            </View>

<Pressable onPress={handleSubmit} style={
stockFormValidation 
&& nameFormValidation && priceFormValidation && descFormValidation

? styles.buttonValidated : styles.buttonNotValidated

}><Text style={{color:'white',fontSize:20, fontWeight:'bold'}}>Upload</Text></Pressable>
            </View>

          </View>
          

        </View>
</TouchableWithoutFeedback>
      </Modal>
     
     </>
    );
}
const styles = StyleSheet.create({
  formInputGood: {
    borderBottomColor:'#1be067',
    padding:10,
    borderBottomWidth:2
    },
    formInputBad: {
      padding:10,
borderBottomColor:'black',
borderBottomWidth:2
    },
  textInput: {
    padding: 10,
    backgroundColor: '#FFFFFF', // Set a constant color
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
},
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
buttonValidated:{
  backgroundColor:'indigo',flex:.5,justifyContent:'center',alignItems:'center',borderRadius:10
},
buttonNotValidated:{
  backgroundColor:'grey',flex:.5,justifyContent:'center',alignItems:'center',borderRadius:10
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