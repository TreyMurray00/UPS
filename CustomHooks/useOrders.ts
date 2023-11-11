
import React , {useEffect, useState}from 'react'
import { useQuery } from '@apollo/client'
import { GET_ORDERS } from '../Queries/queries'



const useOrders = () => {
    const {loading,error,data} = useQuery(GET_ORDERS)
    const [orders,setOrders] = useState<Order[]>([])
    useEffect(()=>{
      if(!data) return
       const orders: Order[] = data.getOrder.map(({value}:OrderResponse)=>({
        carrier: value.carrier,
        shippingCost: value.shippingCost,
        trackingItems: value.trackingItems,
        trackingId: value.trackingId,
        Address: value.Address,
        City: value.City,
        Lat: value.Lat,
        Lng: value.Lng
      }))
      setOrders(orders)
    },[data])
    
     
    return ({loading,error,orders})
}

export default useOrders