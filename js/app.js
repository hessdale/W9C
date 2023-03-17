//creating array for items names
let item_names = [`apple`, `bannana`, `orange`];

//creating array for item prices
let item_prices = [1, 2, 3];

//creating array for items in stock
let in_stock = [true, true, false];

//creating a variable for first item in item_names
let first_item_name = item_names[0];

//creating a variable for first price in item_prices
let first_item_price = item_prices[0];

//using push to add kiwi to item_names array
item_names.push(`kiwi`);

//using pop to get the last item name from item_names
let last_item_name = item_names.pop();

//using pop to get the last item price from item_prices
let last_item_price = item_prices.pop();

//using pop to get the last item stock from in_stock
let last_item_stock = in_stock.pop();