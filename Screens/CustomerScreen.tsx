import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useTailwind } from 'tailwind-rn'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabStackParamList } from '../Navigator/TabNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Image, Input } from '@rneui/themed'

export type CustomerScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList,"Customers">,NativeStackNavigationProp>

const CustomerScreen = () => {
    const [input,setInput] = useState<string>("")
    const tailwind = useTailwind()
    const navigation = useNavigation<CustomerScreenNavigationProp>()
    useLayoutEffect(()=>{
        navigation.setOptions({headerShown:false})

    },[])

  return (
    <ScrollView style={{backgroundColor:"#59C1CC"}}>
        <Image source={{uri: "https://links.papareact.com/3jc"}}
            containerStyle={tailwind("w-full h-64" )}
        />
        <Input value={input}
         placeholder='Search By Customer' 
         onChangeText={setInput}
         containerStyle={tailwind('bg-white pt-5 pb-0 px-10')}/>
    </ScrollView>
  )
}

export default CustomerScreen