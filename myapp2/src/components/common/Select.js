import React from 'react'
import './Select.css'
import List from '../list/list'

class Select extends React.Component {
    constructor() {
        super()

        this.state = {
            perPage: 20,
        }

        this.changer = this.changer.bind(this)
    }

    changer(e) {
        this.setState({ perPage: e.target.value })
    }

    render() {
        return (
            <>
            <div className="custom-select">
                <select onChange={this.changer}>
                    <option value="">PerPage</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
            </div>

            <List perPage = {this.state.perPage}/>
            </>
        )
    }
}

export default Select