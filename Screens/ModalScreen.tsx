import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useTailwind } from 'tailwind-rn'
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Platform } from 'react-native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { TabStackParamList } from '../Navigator/TabNavigator'
import { Icon } from '@rneui/themed'
import { RootStackParamList } from '../Navigator/RootNavigator'
import useCustomer from '../CustomHooks/useCustomer'
import DeliveryCard from '../Components/DeliveryCard'

//@ts-ignore
export type CustomerScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList,"MyModal">,NativeStackNavigationProp>

type ModalScreenNavigationProp = RouteProp<RootStackParamList,'MyModal'>
const ModalScreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(()=>{navigation.setOptions({headerShown:false})})
    const tw = useTailwind()
    const {params:{name,userId}} = useRoute<ModalScreenNavigationProp>()
    const {loading,error,orders} = useCustomer(userId)
  return (
    <View>
      <TouchableOpacity onPress={
        navigation.goBack
      } style={tw("absolute right-5 top-5 z-10")}>
        <Icon name="closecircle" type='antdesign'></Icon>
      </TouchableOpacity>
      <View style={tw("mt-10")}>
        <View style={[tw("py-5 border-b"),{borderColor:"#59C1CC"}]}>
          <Text style={[tw("text-center text-xl font-bold"),{color:"#59C1CC"}]}>{name}</Text>
          <Text style={tw("text-center italic text-sm")}>deliveries</Text>
        </View>
      </View>

      <FlatList
        contentContainerStyle={{paddingBottom:200}}
        data={orders}
        keyExtractor={order => order.trackingId}
        renderItem={({item: order})=><DeliveryCard order={order}/>}
        />
    </View>
  )
}

export default ModalScreen