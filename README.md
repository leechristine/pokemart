This project is a virtual Poké Mart created with React and Node.js.

## Instructions

**View the project here:** [https://pokemart.herokuapp.com/](https://pokemart.herokuapp.com/)<br />


Alternatively, to test the project locally:

Clone this repository to your local machine.<br />
In the project directory, you can run:

### `npm install`

Installs project's dependencies to your local machine.

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

## Functionality

### add product to cart

On launch of the app, the store's products will be displayed.<br />
To add a product to your cart, simply click on the product you wish to add.<br />
The number of items currently in your cart is displayed at the top right of the application.

### view cart

On navigation to the app's [cart](https://pokemart.herokuapp.com/cart),
your cart and the checkout view will be displayed.<br />
You will be able to view all the items in your cart as well as your cart's total.

### increase/decrease quantity of an item in cart
The quantity of each item in your cart is displayed next to its respective item.<br />
To increase or decrease the quantity, click on the icons beside the displayed number:
**+** to increase and **-** to decrease.<br />
The quantity of items will update accordingly, as well as the cart total.

### remove item from cart
To remove an item from your cart, you can choose to either click on the garbage icon
next to an item or decrease the item's quantity to 0.

### view available coupons
To view all available coupons, click on the **?** icon next to Coupons in the checkout view.<br />
When done, click on the arrow to go back.

### add discount to total
To add a discount to your total, enter a valid coupon into the input box of the checkout view.<br />
Click **add** to apply the discount and **remove** to remove it.<br />
Invalid coupons will not be accepted.