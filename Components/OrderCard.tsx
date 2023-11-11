import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/themed';
import { useTailwind } from 'tailwind-rn';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigator/RootNavigator';
import { TabStackParamList } from '../Navigator/TabNavigator';

type Props =  {
    item: Order; 
}
export type OrdersScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList,'Orders'>, NativeStackNavigationProp<RootStackParamList>>


const OrderCard = ({item}:Props) => {
  const tw = useTailwind()
  const navigation = useNavigation<OrdersScreenNavigationProp>()
  return (
    <TouchableOpacity onPress={()=> navigation.navigate("Order",{order: item})}>
      <Card containerStyle={tw("px-5 rounded-lg")}>
        <View style={tw("flex-row justify-between  items-center")}>
          
            <View>
              <Icon type='material-community' name='truck-delivery' color={"#EB6A7C"}></Icon>
              <Text style={{fontSize:10}}> {new Date(item.createdAt).toDateString()}</Text>
            </View>

            <View>
              <Text style={tw("text-gray-400 text-sm")}>{item.carrier} - {item.trackingId}</Text>
              <Text style={tw("text-gray-500 text-xl")}>{item.trackingItems.customer.name}</Text>
            </View>
            

            <View style={[tw("flex-row items-center")]}>
              <Text style={[tw("text-sm items-center")]}>
                  {item.trackingItems.items.length} x
              </Text>
              <Icon name={'box'} type="feather" style={tw("ml-2")}></Icon>
            </View>
          
        </View>


      </Card>
    </TouchableOpacity>
  )
}

export default OrderCard