/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {Login} from './auth-form'
export {Signup} from './signup-form'
export {default as AllCelebrities} from './allCelebrities'
export {default as SingleCelebrity} from './singleCelebrity'
export {default as CartPage} from './cartPage'
export {default as AppStripe} from './app-stripe'
export {default as CheckoutConfirmation} from './checkoutConfirmation'
export {default as HomePage} from './homepage'
