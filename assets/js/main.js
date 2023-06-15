import { showCategories } from './components/filters.js';
import cart from './components/cart.js';
import loader from './components/loader.js';
import products from './components/products.js';
import showCart from './components/showCart.js';
import showMenu from './components/showMenu.js';
import getProducts from './helpers/getProducts.js';
import { enableDarkMode } from './components/darkMode.js';

let productsList = await getProducts();

const setProducts = (products) => {
    printProducts(products)
}

/* UI Elements */

/* Hidden loader */
// loader()

/* Show Menu */
showMenu()

/* Show Cart */
showCart()

/* Show categories */
showCategories(productsList, setProducts)

// Enable dark mode
enableDarkMode()

/* End UI Elements */

/* Products */
const { db, printProducts } = products(productsList)

/* Cart */
cart(db, printProducts)


