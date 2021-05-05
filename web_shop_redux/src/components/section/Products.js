import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Products.css'
import { connect } from 'react-redux'
import {addCart} from '../../state-management/action'

class Products extends React.Component {

    render() {
        const { products, addCart } = this.props
        return (
            <div id='product'>
                {
                    products?.map(product => (
                        <div className='card' key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <img src={product.src} alt='' />
                            </Link>
                            <div className='content'>
                                <h3>
                                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                                </h3>
                                <span>${product.price}</span>
                                <p>{product.description}</p>
                                <button onClick={() => addCart(product._id, product.price)}>Add to card</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}


const mapStateToProps = (args) => {
    return {
        products: args.products,
    }
}

const mapDispatchToProps = {
    addCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)