import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'
import '../css/Cart.css'
import { increase, reduction, removeProduct, getTotal } from '../../state-management/action'
import { connect } from 'react-redux'

class Cart extends Component {

    // componentDidMount() {
    //     this.props.getTotal()
    // }
    
    // componentWillUpdate() {
    //     this.props.getTotal()
    // }

    render() {
        const { cart, increase, reduction, removeProduct, total } = this.props;
        if (cart.length === 0) {
            return <h2 style={{ textAlign: "center" }}>Nothings Product</h2>
        } else {
            return (
                <>
                    {
                        cart.map(item => (
                            <div className="details cart" key={item._id}>
                                <img src={item.src} alt="" />
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${item.price * item.count}</span>
                                    </div>
                                    <Colors colors={item.colors} />
                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item._id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/payment">Payment</Link>
                        <h3>Total: {total}</h3>
                    </div>
                </>
            )
        }
    }
}

const mapStateToProps = (args) => {
    return {
        cart: args.cart,
        total: args.total
    }
}

const mapDispatchToProps = {
    increase,
    reduction,
    removeProduct,
    getTotal
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)