import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { TabStackParamList } from '../Navigator/TabNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../Navigator/RootNavigator'
import useOrders from '../CustomHooks/useOrders'
import { useTailwind } from 'tailwind-rn'
import { Button, Image } from '@rneui/themed'
import OrderCard from '../Components/OrderCard'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'


export type OrdersScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList,'Orders'>, NativeStackNavigationProp<RootStackParamList>>

const OrdersScreen = () => {
  const tw = useTailwind()
  const navigation = useNavigation<OrdersScreenNavigationProp>()
  useLayoutEffect(()=>{navigation.setOptions({headerShown:false, tabBarLabel:({focused,color}:any)=>(
    <Text style={{color:focused ? "#EB6A7C": color,fontSize:10}}></Text>
  ) })})
  const {loading,error,orders} = useOrders()
  const [ascending,setAscending] = useState<boolean>(false)

  return (
    
    <ScrollView style={{backgroundColor:"#EB6A7C", paddingBottom:200}} >
      <Image 
        source={{uri:"https://links.papareact.com/m51"}} 
        style={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator/>}
      />
      <View>
          <Button
            color={"pink"}
            titleStyle={{color:"grey", fontWeight:"400"}} 
            containerStyle={tw("py-4 px-7")}
            onPress={()=> setAscending(!ascending)}>
            {ascending ? "Showing: Oldest First" : "Showing: Most Recent First" }
          </Button>
      </View>
      <View>
      
        {orders?.sort((a,b)=>{
          if (!ascending){
            return new Date(a.createdAt) > new Date(b.createdAt) ? 1: -1
          }else{
            return new Date(a.createdAt) < new Date(b.createdAt) ? 1: -1
          }
        }).map(order =>(
          <OrderCard key={order.trackingId} item={order}/>
        ))}

      </View>
    </ScrollView>
  )
}

export default OrdersScreen