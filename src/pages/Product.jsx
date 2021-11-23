import React from 'react'

import Helmet from '../components/Helmet'

import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'

import productData from '../assets/fake-data/products'

const Product = props => {

    const product = productData.getProductBySlug(props.match.params.slug)

    const relatedProducts = productData.getProducts(8)

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])

    return (
        <Helmet title="Quần áo">
            <div>
                <div>
                    <ProductView product={product} />
                </div>
            </div>
        </Helmet>
    )
}

export default Product
