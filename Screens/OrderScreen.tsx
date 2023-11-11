import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useTailwind } from 'tailwind-rn'
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../Navigator/RootNavigator'
import { TabStackParamList } from '../Navigator/TabNavigator'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import DeliveryCard from '../Components/DeliveryCard'



type OrderSceenRouteProps = RouteProp<RootStackParamList,"Order">
export type OrdersScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList,'Orders'>, NativeStackNavigationProp<RootStackParamList>>

const OrderScreen = () => {
    const {params: {order}} = useRoute<OrderSceenRouteProps>()
    const tw = useTailwind()
    const navigation = useNavigation<OrdersScreenNavigationProp>()
    useLayoutEffect(()=>{
        navigation.setOptions(
            {
                headerTitle: order.trackingItems.customer.name,
                headerBackTitle: "Deliveries",
                headerTintColor: "#EB6A7C",
                headerTitleStyle: {color: "black"}
            },
        )
    })
  return (
    <View style={tw("-ml-2")}>
      <DeliveryCard order={order} fullWidth={true}></DeliveryCard>
    </View>
  )
}

export default OrderScreen