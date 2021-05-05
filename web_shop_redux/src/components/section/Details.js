import React from 'react'
import { Link } from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'
import { connect } from 'react-redux'
import {addCart} from '../../state-management/action'

class Details extends React.Component {
    constructor() {
        super()

        this.state = {
            product: []
        }

        this.getProduct = this.getProduct.bind(this)
    }

    getProduct() {
        if (this.props.match.params.id) {
            const res = this.props.products
            const data = res.filter(item => {
                return item._id === this.props.match.params.id
            })
            this.setState({ product: data })
        }
    }

    componentDidMount() {
        this.getProduct()
    }

    render() {
        const { product } = this.state
        const {addCart} = this.props
        return (
            <>
                {
                    product.map(item => (
                        <div className='details' key={item._id}>
                            <img src={item.src} alt='' />
                            <div className='box'>
                                <div className='row'>
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <Colors colors={item.colors}/>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <Link to='/cart' className='cart' onClick={() => addCart(item._id)}>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Details)