import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, Pressable, ImageBackground ,Modal, TouchableWithoutFeedback,Animated} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


function Home(props) {
    
const categoryClickedHanlder = (categoryname)=>{
    setIsCategoryPicked(true)
    setCategorySelected(categoryname);
}
const categoryNavigationHandler = ()=>{
    setIsCategoryPicked(false)
}
const itemSelectedHandler = (item)=>{
console.log(item);
setItemViewing(item)
setModalVisible(true)
}
const addToCartHandler = (item)=>{
    setCartItemsCount(cartItemsCount+1)
    setModalVisible(false)
    addItemToCart(item)
}

const addItemToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
};
const deleteItemFromCart = (itemId) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== itemId));
    setCartItemsCount(cartItemsCount-1)
};


const [isCategoryPicked, setIsCategoryPicked] = useState(false)
const [modalVisible, setModalVisible] = useState(false);
const [categorySelected,setCategorySelected] = useState("All Clothing")
const [itemViewing,setItemViewing]= useState({})
const [cartItemsCount,setCartItemsCount]= useState(0)
const [cartModalVisible,setCartModalVisible] = useState(false)
const [cartItems, setCartItems] = useState([]);
let cartTotalPrice=0




    const categories = [

        {
            name:"Clothing",
            img: require('../assets/jacket.png')
    
    },
    {
        name:"Jumpers",
        img:require('../assets/jumper.webp')

}
,
    {
        name:"Kicks",
        img:require('../assets/kicks.png')

}
,
    {
        name:"Equipment",
        img:require('../assets/equip.png')

}
    ]
    const items = [
        {
            name:'Tank Top',
            img: require('../assets/jacket.png'),
            price:89.99,
            id:1,
            category:'Clothing'
        },
        {
            name:'LA Jumper',
            img: require('../assets/jumper.webp'),
            price:119.99,
            category:'Clothing',
            id:2
        },
        {
            name:'Strap',
            img: require('../assets/equip.png'),
            price:19.99,
            category:'Equipment',
            id:3
        },
        {
            name:'Tank Top',
            img: require('../assets/jacket.png'),
            price:89.99,
            category:'Clothing',
            id:4
        }
        ,
        {
            name:'Tank Top',
            img: require('../assets/jacket.png'),
            price:89.99,
            category:'Clothing',
            id:5
        },
        {
            name:'Nike Dunks',
            img: require('../assets/kicks.png'),
            price:89.99,
            category:'kicks',
            id:6
        },
        {
            name:'Nike Dunks',
            img: require('../assets/kicks.png'),
            price:89.99,
            category:'Kicks',
            id:7
        },
        {
            name:'Nike Air Force',
            img: require('../assets/kicks.png'),
            price:119.99,
            category:'Kicks',
            id:7
        },
        {
            name:'Tank Top',
            img: require('../assets/jacket.png'),
            price:89.99,
            category:'Clothing',
            id:8
        }
    ]
    return (
        <>
            <View style={styles.mainDiv}>
                <ScrollView style={{...styles.scrollView,margin:10,marginVertical:20}}>
                   

                { !isCategoryPicked && categories.map((category, index) => (
                <Pressable
                onPress={()=>categoryClickedHanlder(category.name)}
                key={index} style={{...styles.category,marginTop:10}}>
                    <View style={styles.categoryText}>
                        <Text style={styles.header1}>{category.name}</Text>
                    </View>
                    <View style={styles.categoryImg}>
                        <Image source={category.img} style={{ height: '100%', width: '100%' }} />
                    </View>
                </Pressable>
            ))}




<Modal
        animationType="slide"
        transparent={true}
        visible={cartModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
             <TouchableWithoutFeedback onPress={() => setCartModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={{...styles.modalView,backgroundColor:'white'}}>
<View style={{flex:7,backgroundColor:'white',width:'100%',marginBottom:10}}>

{ cartItems.length === 0 ? (
        // Render this view when cart is empty
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.header1}>Nothing in cart</Text>
        </View>
    ) : (cartItems.map((cart, index) => (
    
    cartTotalPrice += cart.price,
<View key={index} style={{width:'100%',flexDirection:'row',height:150, backgroundColor:'#F0F1F3',alignItems:'center',borderRadius:10,marginBottom:10}}>



    <Image source={cart.img} style={{padding:20,flex:2,height:100}}/>
    <View style={{flex:4,justifyContent:'center'}}>

        <Text style={{...styles.header1,marginBottom:20}}>{cart.name}</Text>
   
        <Text style={{...styles.header1, fontWeight:'bold',fontSize:20}}>${cart.price}</Text>
    </View>
    
    <View style={{
    padding: 20,
    flex: 1,
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center'
}}>
    <Pressable onPress={()=> deleteItemFromCart(cart.id)} style={{
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <FontAwesome name="trash" size={30} color="indigo" />
    </Pressable>
</View>
    </View>
    )))}
</View>

<View style={{flex:1,backgroundColor:'white',width:'100%',flexDirection:'row'}}>
<View style={{flex:1,flexDirection:'row'}}>
    <Pressable onPress={addToCartHandler} style={{backgroundColor:'indigo',flex:4,justifyContent:'center',alignItems:'center',borderRadius:10,marginHorizontal:10}}>
        <Text style={{...styles.header1,color:"white"}}>${cartTotalPrice}</Text>
    </Pressable>

    </View>

</View>
           
          </View>
          

        </View>
        </TouchableWithoutFeedback>
      </Modal>

{isCategoryPicked && 
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
<Image source={itemViewing.img} style={{backgroundColor:'white',flex:5,width:'100%'}}></Image>
<View style={{backgroundColor:'white',flex:4,width:'100%',justifyContent:'center', alignItems:'center'}}>
    <Text style={styles.header1}>{itemViewing.name}</Text>
    <Text style={styles.header1}>Size : Medium</Text>
    <Text style={{textAlign:'center',marginVertical:15}}> Commodo deserunt sint ipsum fugiat occaecat irure aute incididunt. Esse ex laborum cupidatat irure Lorem nostrud in est incididunt. Eiusmod aliqua mollit occaecat amet.</Text>
    <Text style={{...styles.header1,fontSize:29}}>${itemViewing.price}</Text>
    
</View>
<View style={{flex:1,backgroundColor:'white',width:'100%',flexDirection:'row'}}>
<View style={{flex:1,flexDirection:'row'}}>
    <Pressable onPress={()=> addToCartHandler(itemViewing)} style={{backgroundColor:'indigo',flex:4,justifyContent:'center',alignItems:'center',borderRadius:10,marginHorizontal:10}}>
        <Text style={{...styles.header1,color:"white"}}>Add To Cart</Text>
    </Pressable>
    <Pressable onPress={addToCartHandler} style={{backgroundColor:'lightgrey',flex:1,justifyContent:'center',alignItems:'center',borderRadius:10,marginHorizontal:10}}>
        <Text style={{...styles.header1,color:"black"}}>1</Text>
    </Pressable>
    </View>

</View>
           
          </View>
          

        </View>
        </TouchableWithoutFeedback>
      </Modal>




<Pressable onPress={categoryNavigationHandler}
style={{padding:10,backgroundColor:'lightgrey',width:150,marginVertical:10,borderRadius:10}}>
    <Text>← Categories</Text>
    </Pressable>
<ImageBackground
source={require('../assets/bg.png')}
style={styles.backgroundImage}

>
<View style={styles.overlay}>
                <Text style={{...styles.header1, color:"white", fontWeight:'bold', fontSize:20}}>{categorySelected}</Text>
            </View>
</ImageBackground>
<View style={{
    flex: 1,
    padding:10,
    flexDirection: 'row',
    justifyContent:'space-around',
   
    flexWrap: 'wrap' // Enable wrapping of items
}}>
    {

items.filter(item => item.category === categorySelected).map((item, index) => (
    <Pressable onPress={() => itemSelectedHandler(item)} key={index} style={{...styles.shopItem, width: '45%'}}>

        <Image source={item.img} style={{flex: 2, width: '100%', height: '100%'}} />
        <View style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>{item.name}</Text>
            <Text style={{fontWeight: 'bold', fontSize: 17}}>${item.price}</Text>
        </View>
    </Pressable>
))

    
    }
</View>

</>

}

 
                    
                </ScrollView>

                <View style={styles.bottomNav}>
                    <View style={styles.iconContainer}>
                        <Icon name="home" size={30} color="#373737" />
                    </View>
                    <View style={styles.iconContainer}>
                    <FontAwesome name="gear" size={30} color="#373737" />
                    </View>
                    <Pressable onPress={()=> setCartModalVisible(!cartModalVisible)} style={styles.iconContainer}>
                        {cartItemsCount>0 &&
                    <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{cartItemsCount}</Text> 
        </View> }
                    <FontAwesome name="cart-plus" size={30} color="#373737" />
                    </Pressable>
                    <View style={styles.iconContainer}>
                    <FontAwesome name="user" size={30} color="#373737" />

                    </View>
                </View>
            </View>
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

export default Home;
