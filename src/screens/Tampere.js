import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text,View,Dimensions,Pressable,StyleSheet,TouchableOpacity } from 'react-native'
const Tampere = () => {

    const {width,height} = Dimensions.get('window')
    const navigation = useNavigation()
    const gotomyshifts =()=>{
        navigation.navigate('Myshifts')
    }
    const gotothelsinki =()=>{
        navigation.navigate('Availableshifts')
    }
    const gototurku =()=>{
        navigation.navigate("Turku")
    }
  return (
      <>
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
      <View style={{width:width,alignItems:'center',paddingVertical:20,backgroundColor:'#FFFF',height:65,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            
      <Pressable onPress={gotothelsinki}>
      
      
      <Text style={{fontSize:17,fontWeight:'bold',color:'grey'}}>Helsinki (5)</Text>
      

      </Pressable>
      <Pressable >
      
      
      <Text style={{fontSize:17,color:'#004FB4',fontWeight:'bold'}}>Tampere (8)</Text>
      

      </Pressable>
      <Pressable onPress={gototurku}>
      
      
      <Text style={{fontSize:17,color:'grey'}}>Turku (5)</Text>
      

      </Pressable>
      </View>
      </View>
      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#F7F8FB',height:50,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'grey'}}>Today</Text>
      </Pressable>
      
      </View>
      </View>
    
      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#FFFF',height:65,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'#004FB4'}}>12:00-14:00</Text>
      </Pressable>
      <Pressable>
      
      <Text style={{fontSize:17,color:'#004FB4'}}>Booked</Text>
      </Pressable>
      <Pressable>
      <TouchableOpacity
          
          style={styles.button}
        >
          <Text style={styles.buttonText}>Book</Text>
        </TouchableOpacity>
      </Pressable>
      </View>
      </View>
      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#FFFF',height:65,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'#004FB4'}}>13:00-15:00</Text>
      </Pressable>
      <Pressable>
      <Text style={{fontSize:17,color:'red'}}>Overlapping</Text>
      </Pressable>
      <Pressable>
      <TouchableOpacity 
          
          style={styles.button}
        >
          <Text style={styles.buttonText}>Book</Text>
        </TouchableOpacity>
      </Pressable>
      </View>
      </View>
      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#FFFF',height:65,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'#004FB4'}}>14:00-16:00</Text>
      </Pressable>
      <Pressable>
      <Text style={{fontSize:17,color:'#004FB4'}}>Booked</Text>
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
      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#FFFF',height:65,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'#004FB4'}}>16:00-18:00</Text>
      
      </Pressable>
      <Pressable>
      <TouchableOpacity
          
          style={styles.buttongreen}
        >
          <Text style={styles.buttonTextgreen}>Book</Text>
        </TouchableOpacity>
      </Pressable>
      </View>
      </View>
      
      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#F7F8FB',height:50,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'grey'}}>Semptember 21</Text>
      
      </Pressable>
      
      </View>
      </View>

      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#FFFF',height:65,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'#004FB4'}}>12:00-16:00</Text>
      </Pressable>
      
      <Pressable>
      <TouchableOpacity
          
          style={styles.buttongreen}
        >
          <Text style={styles.buttonTextgreen}>Book</Text>
        </TouchableOpacity>
      </Pressable>
      </View>
      </View>
      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#F7F8FB',height:50,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'grey'}}>September 22</Text>
      
      </Pressable>
      
      </View>
      </View>
      
      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#FFFF',height:65,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'#004FB4'}}>14:00-16:00</Text>
      </Pressable>
      <Pressable>
      <Text style={{fontSize:17,color:'#004FB4'}}>Booked</Text>
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
      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#FFFF',height:65,borderTopWidth:1,borderTopColor:'#CBD2E1'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'#004FB4'}}>16:00-18:00</Text>
      </Pressable>
      <Pressable>
      <Text style={{fontSize:17,color:'#004FB4'}}>Booked</Text>
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
      <View style={{width:width,alignItems:'center',paddingVertical:10,backgroundColor:'#FFFF',height:65,borderTopWidth:1,borderTopColor:'#CBD2E1',marginBottom:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            
      <Pressable>
      
      <Text style={{fontSize:17,color:'#004FB4'}}>18:00-20:00</Text>
      </Pressable>
      <Pressable>
      <Text style={{fontSize:17,color:'#004FB4'}}>Booked</Text>
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
      <Pressable onPress={gotomyshifts}>
      
      <Text style={{fontSize:17,color:'grey',fontWeight:'bold'}}>My Shifts</Text>
      </Pressable>
      <Pressable >
      
      <Text style={{fontSize:17,color:'#004FB4',fontWeight:'bold'}}>Available Shifts</Text>
      </Pressable>
      
      </View>
      </View>
      
      </>
  )
}
const styles = StyleSheet.create({
    button: {
        
        width: '200%',
        borderRadius: 20,
        alignItems: 'center',
        height:'90%',
        top:1.5,
        borderWidth:1,
        borderColor:'grey',
        
      },
      buttonText: {
        color: 'grey',
        fontWeight: '700',
        fontSize: 15,
        top:7
      },
      buttonred: {
        
        width: '210%',
        borderRadius: 20,
        alignItems: 'center',
        height:'90%',
        top:1.5,
        borderWidth:1,
        borderColor:'red',
        marginRight:-15
        
      },
      buttonTextred: {
        color: 'red',
        fontWeight: '700',
        fontSize: 15,
        top:7
      },
      buttongreen: {
        
        width: '200%',
        borderRadius: 20,
        alignItems: 'center',
        height:'90%',
        top:1.5,
        borderWidth:1,
        borderColor:'green',
        
        
      },
      buttonTextgreen: {
        color: 'green',
        fontWeight: '700',
        fontSize: 15,
        top:7
      },
})

export default Tampere