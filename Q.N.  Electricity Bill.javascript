<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electricity Bill Calculator</title>
</head>
<body>

    <h1>Electricity Bill Calculator</h1>

    <script>
        // Take electricity units from the user
        let units = Number(prompt("Enter the number of electricity units consumed:"));
        let bill;


        if (units <= 50) {
            bill = units * 5;
        }
        else if (units <= 100) {
            bill = units * 7;
        }
        else if (units <= 200) {
            bill = units * 10;
        }
        else {
            bill = units * 12;
        }


        document.write("<h2>Electricity Bill</h2>");
        document.write("<p>Units Consumed: " + units + "</p>");
        document.write("<p>Bill Amount: Rs. " + bill + "</p>");
    </script>

</body>
</html>