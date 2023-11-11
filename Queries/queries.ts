import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql `
    query MY_QUERY {
        getCustomers {
            name
            value {
            email
            name
            }
    }
    }
`


export const GET_ORDERS = gql`
query MyQuery {
  getOrder {
    name
    value {
      Address
      City
      Lat
      Lng
      carrier
      shippingCost
      trackingId
      trackingItems {
        customer {
          email
          name
        }
        customer_id
        items {
          item_id
          name
          price
          quantity
        }
      }
    }
  }
}`
