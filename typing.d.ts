type Customer = {
    email: string;
    name: string;
}

type CustomerList = {
    value: Customer[];
}

type CustomerResponse = {
    name : ID;
    value: Customer;
}

type Item = {
    item_id: ID;
    name: string;
    price : number;
    quantity: number;
}

type TrackingItems = {
    customer: Customer;
    customer_id: ID;
    items: Item[];
}

type Order = {
    carrier: string;
    createdAt: string;
    shippingCost: number;
    trackingId: string;
    trackingItems:TrackingItems;
    Address: string;
    City: string;
    Lat: number;
    Lng: number;
}


type OrderResponse = {
    value: Order;
}
