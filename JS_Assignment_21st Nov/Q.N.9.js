const getFoodPrice = (foodName) => {
    if (foodName === "Burger") {
        return 250;
    } else if (foodName === "Pizza") {
        return 500;
    } else if (foodName === "Momo") {
        return 150;
    } else if (foodName === "Chowmein") {
        return 180;
    } else {
        return 0;
    }
};

const calculateServiceCharge = (foodAmount) => {
    return foodAmount * 0.05;
};

const calculateOrder = (foodName, quantity, callback) => {
    const pricePerItem = getFoodPrice(foodName);

    if (pricePerItem === 0) {
        return 0;
    }

    return callback(pricePerItem * quantity);
};

const generateReceipt = (customerName,foodName,quantity,callback)=>{
    const pricePerItem = getFoodPrice(foodName);

    if (pricePerItem === 0) {
        console.log("Invalid Food Item!");
        return;
    }

    const foodAmount = pricePerItem * quantity;
    const serviceCharge = callback(foodName, quantity, calculateServiceCharge);
    const finalAmount = foodAmount + serviceCharge;

    console.log("Customer:", customerName);
    console.log("Food:", foodName);
    console.log("Quantity:", quantity);
    console.log("Food Amount: Rs.", foodAmount);
    console.log("Service Charge: Rs.", serviceCharge);
    console.log("Final Amount: Rs.", finalAmount);
};

generateReceipt("Suman", "Burger", 2, calculateOrder);