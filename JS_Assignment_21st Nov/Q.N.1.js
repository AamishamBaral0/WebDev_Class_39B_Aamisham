
const calculateBill = (units) => {
    let billAmount = 0;

    if (units <= 20) {
        billAmount = units * 5;
    } else if (units <= 50) {
        billAmount = (20*5) + ((units-20)*7);
    } else {
        billAmount = (20*5) + (30*7) + ((units-50)*10);
    }

    return billAmount + 50; 
};


const displayBill = (customerName, unitsConsumed, billCalculator) => {
    const totalBill = billCalculator(unitsConsumed);

    console.log("Customer:", customerName);
    console.log("Units Consumed:", unitsConsumed);
    console.log("Total Electricity Bill: Rs.", totalBill);
};


displayBill("Ram", 65, calculateBill);