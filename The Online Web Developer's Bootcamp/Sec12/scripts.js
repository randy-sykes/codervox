

/*Section 12.5 - Arrays in objects*/

var onlineOrders2 = {
    order1: ["Bella", "Banana nut bread", 3],
    order2: ["Lucy", "Chocolate chip cookie", 4],
    order3: ["Emily", "Blueberry muffin", 2],
}

console.log(onlineOrders2.order1[0]);
console.log(onlineOrders2.order2[1]);
console.log(onlineOrders2.order3[2]);

/*Section 12.4 - Objects in arrays

function displayOrder(order) {
    document.write("<div>" + order.name + " ordered " + order.quanity + " " + order.order + "</div>");
}

var onlineOrders = [
    {
        name: "Bella",
        order: "Banana nut bread",
        quanity: 3
    },
    {
        name: "Lucy",
        order: "Chocolate chip cookie",
        quanity: 4
    }
];

onlineOrders.forEach(displayOrder)

onlineOrders[0].order;
onlineOrders[1].name;
*/

/*Section 12.3 - Methods
var onlineOrder = {
    product: "Banana nut bread",
    quanity: 1,
    delicious: true,
    shippingCost: function(person) {
        return "Thank you for your order "+ person + "!";
    },
    notes: "Extra moist",
}

console.log(onlineOrder.shippingCost("Greg"));
console.log(onlineOrder.shippingCost("Nicole"));
*/

/*Section 12.2 - Accessing and updating objects
var onlineOrder = {
    product: "Banana nut bread",
    quantity: 1,
    delicious: true,
    notes: "Extra moist",
}

console.log(onlineOrder.product);
console.log(onlineOrder["product"]);
console.log(onlineOrder.quantity);
console.log(onlineOrder["quantity"]);
console.log(onlineOrder["notes"]);

onlineOrder.product = "Iced lemon pound cake";
onlineOrder['quantity'] = 2;

console.log(onlineOrder.product);
console.log(onlineOrder);
*/

/*Section 12.1 - What are objects?

var onlineOrder = {
    product: "Banana nut bread",
    quantity: 1,
    delicious: true,
    notes: "Extra moist",
}
*/