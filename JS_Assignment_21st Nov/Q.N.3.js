const calculateDiscount = (purchaseAmount) => {
    if (purchaseAmount >= 5000) {
        return 20;
    } else if (purchaseAmount >= 3000) {
        return 15;
    } else if (purchaseAmount >= 1000) {
        return 10;
    } else {
        return 0;
    }
};

const calculateFinalPrice = (purchaseAmount, discountPercentage) => {
    const discountAmount = (purchaseAmount * discountPercentage) / 100;
    return purchaseAmount - discountAmount;
};

const checkout = (customerName, purchaseAmount, callback) => {
    const discountPercentage = calculateDiscount(purchaseAmount);
    const finalPrice = callback(purchaseAmount, discountPercentage);

    console.log("Customer:", customerName);
    console.log("Original Price: Rs.", purchaseAmount);
    console.log("Discount:", discountPercentage + "%");
    console.log("Final Price: Rs.", finalPrice);
};
checkout("Aamisham", 6000, calculateFinalPrice);