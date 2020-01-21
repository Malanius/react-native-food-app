import { db } from '../Config/Firebase';

const orderRef = db.ref('orders');

export default {

    addOrder: (name, address, phone, note, price, cart) => {
        const id = orderRef.push().key;
        orderRef.child(id).set({
            id: id,
            name: name,
            address: address,
            phone: phone,
            note: note,
            price: price,
            cart: cart,
            time: new Date(Date.now()).toLocaleString()
        });
    },

    removeOrder: (id) => {
        orderRef.child(id).removeOrder;
    }

}