import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text,View,Dimensions,Pressable,StyleSheet,TouchableOpacity } from 'react-native'
const myshifts = () => {

    const {width,height} = Dimensions.get('window')
    const navigation = useNavigation()
    const gotoavail =()=>{
        navigation.navigate('Availableshifts')
    }

  return (
      <>
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
    <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#F7F8FB',height:50,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'grey'}}>Today 2 shifts, 4 hours</Text>
      </Pressable>
      
      </View>
      </View>
      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#FFFF',height:65,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'#004FB4'}}>14:00-16:00</Text>
      <Text style={{fontSize:17,color:'grey'}}>Helsinki</Text>
      

      </Pressable>
      <Pressable>
      <TouchableOpacity
          
          style={styles.button}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </Pressable>
      </View>
      </View>
      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#FFFF',height:65,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'#004FB4'}}>14:00-16:00</Text>
      <Text style={{fontSize:17,color:'grey'}}>Helsinki</Text>
      </Pressable>
      <Pressable>
      <TouchableOpacity
          
          style={styles.buttonred}
        >
          <Text style={styles.buttonTextred}>Cancel</Text>
        </TouchableOpacity>
      </Pressable>
      </View>
      </View>
      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#F7F8FB',height:50,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'grey'}}>Tomorrow 1 shift, 4 h</Text>
      
      </Pressable>
      
      </View>
      </View>

      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#FFFF',height:65,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'#004FB4'}}>12:00-16:00</Text>
      <Text style={{fontSize:17,color:'grey'}}>Tampere</Text>
      </Pressable>
      <Pressable>
      <TouchableOpacity
          
          style={styles.buttonred}
        >
          <Text style={styles.buttonTextred}>Cancel</Text>
        </TouchableOpacity>
      </Pressable>
      </View>
      </View>
      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#F7F8FB',height:50,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'grey'}}>September 22 1 shift, 4 h</Text>
      
      </Pressable>
      
      </View>
      </View>
      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#FFFF',height:65,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'#004FB4'}}>14:00-16:00</Text>
      <Text style={{fontSize:17,color:'grey'}}>Helsinki</Text>
      </Pressable>
      <Pressable>
      <TouchableOpacity
          
          style={styles.buttonred}
        >
          <Text style={styles.buttonTextred}>Cancel</Text>
        </TouchableOpacity>
      </Pressable>
      </View>
      </View>
      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#FFFF',height:65,borderTopWidth:1,borderTopColor:'#CBD2E1',marginBottom:270}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'#004FB4'}}>16:00-18:00</Text>
      <Text style={{fontSize:17,color:'grey'}}>Helsinki</Text>
      </Pressable>
      <Pressable>
      <TouchableOpacity
          
          style={styles.buttonred}
        >
          <Text style={styles.buttonTextred}>Cancel</Text>
        </TouchableOpacity>
      </Pressable>
      </View>
      </View>



        </View>
      
      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#F7F8FB',height:50,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
      <Pressable>
      
      <Text style={{fontSize:17,color:'#004FB4',fontWeight:'bold'}}>My Shifts</Text>
      </Pressable>
      <Pressable onPress={gotoavail}>
      
      <Text style={{fontSize:17,color:'grey'}}>Available Shifts</Text>
      </Pressable>
      
      </View>
      </View>
      
      </>
  )
}
const styles = StyleSheet.create({
    button: {
        
        width: '150%',
        borderRadius: 20,
        alignItems: 'center',
        height:'80%',
        top:1.5,
        borderWidth:1,
        borderColor:'grey'
      },
      buttonText: {
        color: 'grey',
        fontWeight: '700',
        fontSize: 15,
        top:7
      },
      buttonred: {
        
        width: '150%',
        borderRadius: 20,
        alignItems: 'center',
        height:'80%',
        top:1.5,
        borderWidth:1,
        borderColor:'red'
      },
      buttonTextred: {
        color: 'red',
        fontWeight: '700',
        fontSize: 15,
        top:7
      },
})

export default myshifts