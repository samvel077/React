import React from 'react'
import { API_URL } from '../../config'
import { handleResponse } from '../../helpers'
import Loading from '../common/Loading'
import Pagination from './Pagination'
import Table from './Table'
import './Table.css'
import '../common/Select.css'


class List extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            currencies: [],
            error: null,
            totalPages: 0,
            page: 1,
            perPage: 20
        }

        this.handlePaginationClick = this.handlePaginationClick.bind(this)
        
    }

  
    componentWillReceiveProps(next){
        if (next.perPage!==this.props.perPage) {
            this.setState({
                perPage:next.perPage
            },()=>{
                this.fetchCurrencies()

            })
        }
    }

    componentDidMount() {
        this.fetchCurrencies()
    }

    fetchCurrencies() {
        this.setState({ loading: true })

        const { page } = this.state

        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=${this.state.perPage}`)
            .then(handleResponse)
            .then(data => {
                const { currencies, totalPages } = data

                this.setState({
                    currencies,
                    totalPages,
                    loading: false
                })
            })
            .catch(error => {
                this.setState({
                    error: error.errorMessage,
                    loading: false
                })
            })
    }

    handlePaginationClick(direction) {
        let nextPage = this.state.page

        nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1

        this.setState({ page: nextPage }, () => {
            this.fetchCurrencies()
        })
    }

    render() {
        const { currencies, loading, error, page, totalPages } = this.state
        // console.log(this.props);
        // console.log(currencies);
       
        if (error) {
            return <div>Error...</div>
        }
        if (loading) {
            return <div className='loading-container'><Loading /></div>
        }
        return (
            <>
                <Table
                    currencies={currencies}
                />

                <Pagination
                    page={page}
                    totalPages={totalPages}
                    handlePaginationClick={this.handlePaginationClick}

                />
            </>
        )
    }
}


export default List