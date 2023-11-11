import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_ORDERS } from '../Queries/queries'

function useCustomer (userId: string) {
  const {loading,error,data} = useQuery(GET_ORDERS)
  const [orders,setOrders] = useState<Order[]>([])
  useEffect(()=>{
    if(!data) return
    
    if (Array.isArray(data["getOrder"])) {
      
      const orders :Order[] = data["getOrder"].map(({value}:OrderResponse)=>({
          carrier: value.carrier,
          createdAt: value.createdAt,
          shippingCost: value.shippingCost,
          trackingItems: value.trackingItems,
          trackingId: value.trackingId,
          Address: value.Address,
          City: value.City,
          Lat: value.Lat,
          Lng: value.Lng,
      }))
      const customerOrders = orders.filter((order)=> order.trackingItems.customer_id === userId)
      setOrders(customerOrders)
    }
   
  },[data,userId])
  
    return (
    {loading,error,orders}
  )
}

export default useCustomer