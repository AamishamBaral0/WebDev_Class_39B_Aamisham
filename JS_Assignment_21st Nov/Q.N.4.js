const getTicketPrice = (age) => {
    if (age < 12) {
        return 150;
    } else if (age >= 12 && age <= 17) {
        return 200;
    } else if (age >= 18 && age <= 59) {
        return 300;
    } else {
        return 200;
    }
};

const calculateTotal = (ticketPrice, ticketQuantity) => {
    return ticketPrice * ticketQuantity;
};

const applyDiscount = (totalAmount, ticketQuantity) => {
    if (ticketQuantity >= 5) {
        return totalAmount * 0.10;
    } else {
        return 0;
    }
};


const processBooking = (totalAmount, ticketQuantity) => {
    const discountAmount = applyDiscount(totalAmount, ticketQuantity);
    return totalAmount - discountAmount;
};
const bookTicket = (
    customerName,
    customerAge,
    ticketQuantity,
    callback
) => {
    const ticketPrice = getTicketPrice(customerAge);
    const totalAmount = calculateTotal(ticketPrice, ticketQuantity);
    const discountAmount = applyDiscount(totalAmount, ticketQuantity);
    const finalAmount = callback(totalAmount, ticketQuantity);

    console.log("Customer:", customerName);
    console.log("Age:", customerAge);
    console.log("Tickets:", ticketQuantity);
    console.log("Total Before Discount: Rs.", totalAmount);
    console.log("Discount: Rs.", discountAmount);
    console.log("Final Amount: Rs.", finalAmount);
};

bookTicket("Hari", 25, 5, processBooking);