import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Payment from '../pages/Payment'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Catalog from '../pages/Catalog'
import Formlogin from '../pages/Formlogin'
import Oder from '../pages/Oder'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/cart' exact component={Cart} />
            <Route path='/payment' component={Payment} />
            <Route path='/login' exact component={Formlogin} />
            <Route path='/Oder' exact component={Oder} />
            <Route path='/catalog/:slug' exact component={Product} />
            <Route path='/clothes' exact component={Catalog} />
             {/* <Route path='/catalog/:slug' component={Product}/> */}
            {/* <Route path='/' component={Catalog}/> */}
        </Switch>
    )
}

export default Routes
