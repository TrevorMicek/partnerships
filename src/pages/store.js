import React, { useCallback, useEffect, useState } from "react"
import Layout from '../components/layout/layout'
import { Link } from 'gatsby'
import { Router, Redirect } from '@reach/router'
import Products from "../storePage/storeComponents/Products"
import ProductView from "../storePage/storeComponents/Productview"
import Cart from '../storePage/storeComponents/Cart'
import createComponent from '../components/commonComps/createCart'
import HomeButton from '../components/commonComps/storeHeaderButton'

import { useShopify } from "../storePage/hooks"

import { Provider } from "react-redux"


import SEO from "../components/layout/seo"
import styles from '../styles/StorePage/wrapper.css'

import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import * as reducers from "../storePage/redux/ducks"

const App = () => {
    const Pages = (props) => {
     const {
		createShop,
		createCheckout,
		fetchProducts,
        addVariant
		// fetchCollection,
	} = useShopify()

    const [cart, setCart] = useState([])
    const [cartAmount, setCartAmount] = useState(0)
    const [linkUrl, setLinkUrl] = useState('/')
    const getUrl = (url) => setLinkUrl(url)
	const addToCart = (cartItem) => setCart([...cart, cartItem])
    const getCart = () => setCartAmount(cart.length)

    const storage = () => JSON.parse(window.localStorage.getItem('cart')) || {}
    const createCart = () => {

        addToCart(storage())

        return createComponent(cart, addVariant)
    }
	useEffect(() => {
		createShop()
		fetchProducts()
		createCheckout()

		// fetchCollection()
	}, [])
    const handleClick = (url) => getUrl(url)
    const ContinueShopping = () => (
        <HomeButton linkUrl={linkUrl} geturl={getUrl} title="Continue Shopping" onClick={() => handleClick('../../')} />
    )
    const CartButton = () => (
        <HomeButton linkUrl={linkUrl} geturl={getUrl} title="To Store" onClick={() => handleClick('../')} />
    )
    const MainHomeButton = () => (
        <HomeButton linkUrl={linkUrl} geturl={getUrl} title="Main Website" onClick={() => handleClick('/')} />
    )

    const switchButton = () => {
        switch(linkUrl) {
            case '/':
                return <HomeButton linkUrl={linkUrl} geturl={getUrl} title="Main Website" onClick={() => handleClick('/')} />
            case '../../':
                return <HomeButton linkUrl={linkUrl} geturl={getUrl} title="Continue Shopping" onClick={() => handleClick('../../')} />
        }
    }

    const CartWrapper = () => (
        <div className="homeButtonWrapper">
    {switchButton()}

    <Cart create={createCart} title={props.title} homeButton={CartButton} button={getUrl} />
 </div>
    )

    return (
        <>
        <Router>
            <CartWrapper path='/store/cart' />
			<Products path="/store" title={props.title} getTitle={props.getTitle} homeButton={MainHomeButton}  />
			<ProductView path='/store/products/:productId' title={props.getTitle} homeButton={ContinueShopping} button={getUrl} />

        </Router>
        </>
    )
}
const Store = () => {
    const initialTitle = 'Custom Ecommerce'
    const [pageTitle, setPageTitle] = useState(initialTitle)
    const getTitle = (title) =>{

         setPageTitle(title)

    }
   //const composeEnhancers = window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE__ || compose;
    const rootReducer = combineReducers(reducers);
    const enhancer = compose(applyMiddleware(thunk));
    const store = createStore(rootReducer, enhancer);
return (

    <Layout title="Store" text="Our high quality, unique store example that's perfect for small businesses">
    <SEO title="Online Store" />
    <div className={styles.wrapper}>
	<Provider store={store}>
        <Pages title={pageTitle} getTitle={getTitle} />
	</Provider>
    </div>
   </Layout>
)
}
return <Store />
}
export default App;