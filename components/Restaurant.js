import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView,TouchableOpacity,Animated} from 'react-native';
import {icons,images,SIZES,COLORS,FONTS} from '../constants/'

const Restaurant = ({route,navigation}) => {
    const [restaurant,setRestaurant]=useState(null)
    const [currentLocation,setCurrentLocation]=useState(null)
    
    useEffect(()=>{
           let {item,currentLocation} = route.params
           console.log(item) 
          setRestaurant(item)
          setCurrentLocation(currentLocation)
    },[])
    const renderHeader=()=>{
        return(
            <View style={{height:50 , flexDirection:'row'}} >
                  <TouchableOpacity 
                     style={{
                         width: 50,
                         paddingLeft : SIZES.padding*2,
                         justifyContent:'center',
                     }}
                     onPress={()=>navigation.goBack()}
                  >
                          <Image source={icons.back}
                                    style={{width:30,height:30}}
                                />
                  </TouchableOpacity>
                  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <View style={{width:'70%',height:'100%',justifyContent:'center',
                                        backgroundColor:COLORS.lightGray,alignItems:'center',
                                        borderRadius:SIZES.radius}}>
                             <Text style={{...FONTS.h4}}>{restaurant?.name}</Text>
                        </View>
                  </View>
                  <TouchableOpacity 
                     style={{
                         width: 50,
                         paddingRight : SIZES.padding*2,
                         justifyContent:'center',
                     }}
                  >
                          <Image source={icons.list}
                                    style={{width:30,height:30}}
                                />
                  </TouchableOpacity>
                        
                   
              </View>
        )
    }

    const renderFoodInfo=()=>{
        return(
            <Animated.ScrollView
          horizontal
          pagingEnabled
          scrollEventThrottle={16} 
          snapToAlignment='center'
          showsHorizontalScrollIndicator={false} 
          >
             {/* { restaurant?.menu.map((item,index)=>{
                    <View key={`menu-${index}`}
                          style={{alignItems:'center'}}
                         >
                             <View style={{height:SIZES.height}}>
                                   <Image source={item.photo}
                                          resizeMode='cover'
                                          style={{height:'100%',width:SIZES.width}}
                                    />
                                    
                             </View>

                    </View>
             })} */}
             {restaurant?.menu.map((element,index) => {
                  <Text key={index}>{element.name}</Text>
             })}
          </Animated.ScrollView>
        )}

    return (
        <SafeAreaView style={{backgroundColor:COLORS.white,height:'100%'}}>
             {renderHeader()}
             {renderFoodInfo()}
        </SafeAreaView>       
    );
};

export default Restaurant;