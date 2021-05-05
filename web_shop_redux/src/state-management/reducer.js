let initialStore = {
    products: [
        {
            "_id": "1",
            "title": "Nike Shoes 01",
            "src": "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 23,
            "colors": ["red", "black", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "2",
            "title": "Nike Shoes 02",
            "src": "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 19,
            "colors": ["red", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "3",
            "title": "Nike Shoes 03",
            "src": "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 50,
            "colors": ["lightblue", "white", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "4",
            "title": "Nike Shoes 04",
            "src": "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 15,
            "colors": ["orange", "black", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "5",
            "title": "Nike Shoes 05",
            "src": "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 10,
            "colors": ["orange", "black", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "6",
            "title": "Nike Shoes 06",
            "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 17,
            "colors": ["orange", "black", "crimson", "teal"],
            "count": 1
        }
    ],
    cart: [],
    total: 0,
}


function totalChanger(state) {
    const res = state.cart.reduce((prev, item) => {
        return prev + (item.price * item.count);
    }, 0)
    return res
}


export const rootReducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'ADD_CART':
            const check = state.cart.every(item => {
                return item._id !== action.payload
            })
            if (check) {
                const data = state.products.filter(product => {
                    return product._id === action.payload
                })
                return {
                    ...state,
                    payload: action.payload,
                    cart: [...state.cart, ...data],
                    total: action.price + state.total
                }
            }
            else {
                alert('The product has been added to cart.')
                return {
                    ...state,
                    payload: action.payload,
                    cart: [...state.cart],
                }
            }

        case 'REDUCTION':
            state.cart.forEach(item => {
                if (item._id === action.payload) {
                    item.count === 1 ? item.count = 1 : item.count -= 1
                }
            })
            return {
                ...state,
                payload: action.payload,
                cart: [...state.cart],
                total: totalChanger(state)
            }

        case 'INCREASE':
            state.cart.forEach(item => {
                if (item._id === action.payload) {
                    item.count += 1
                }
            })

            return {
                ...state,
                payload: action.payload,
                cart: [...state.cart],
                total: totalChanger(state)
            }

        // case 'GET_TOTAL':
        //     const res = state.cart.reduce((prev, item) => {
        //         return prev + (item.price * item.count);
        //     }, 0)
        //     return {
        //         ...state,
        //         payload: action.payload,
        //         total: res
        //     }

        case 'REMOVE_PRODUCT':
            if (window.confirm('Do you want to delete this product?')) {
                state.cart.forEach((item, index) => {
                    if (item._id === action.payload) {
                        state.cart.splice(index, 1)
                        item.count = 1
                    }
                })
                return {
                    ...state,
                    payload: action.payload,
                    cart: [...state.cart],
                    total: totalChanger(state)
                }
            }

            break;
        default: return {
            ...state
        }
    }
}

