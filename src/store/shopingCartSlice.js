import {createSlice, current} from "@reduxjs/toolkit";

const shoppingSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [],
        deleteConfirm: false,
        idCatcher: 0,
        notification: [],
        pageNumber: 1,
        searchResult: [],
        searchItemName: null
    },
    reducers: {

        changePageNumber(state, action) {
            state.pageNumber = action.payload
        },
        addToCart(state, action) {
            const findItem = state.value.find((product) => product.id === action.payload.id);
            if (findItem) {
                findItem.quantity += 1;
                state.notification.push({addItem: 'Product added successfully'})
            } else {
                const clone = {...action.payload, quantity: 1}
                state.value.push(clone);
                state.notification.push({addItem: 'Product added successfully'});
            }

        },
        deleteFromCart(state, action) {
            state.value = state.value.filter((item) => item.id != state.idCatcher);
            state.deleteConfirm = false;
            state.notification.push({delete: 'Product was removed from cart'})

        },
        plus(state, action) {
            state.value.map((product) => product.id === action.payload
                ? {...product, quantity: product.quantity += 1} : product);
            state.notification.push({addItem: 'Product added successfully'});

        }
        ,

        minus(state, action) {
            state.value.map(product => product.id === action.payload ?
                {...product, quantity: product.quantity -= 1} : product);
            state.notification.push({updateItem: 'Item quantity has been updated'})

        },
        closeOpenDeleteConfirm(state, action) {
            state.deleteConfirm = action.payload;
        },
        addToIdCatcher(state, action) {
            state.idCatcher = action.payload;
        },
        hideNotificationMessage(state) {
            state.notification = state.notification.slice(1)
        },
        clearNotificationMessage(state, action) {
            state.notification.splice(action.payload, 1)

        },
        registerNotification(state) {
            state.notification.push({updateItem: 'sign up done successfully'})
        },
        setSearchResult(state, action) {
            state.searchResult = [];
            let searchItemName = action.payload.searchItem.toLowerCase();

            const searchFilter = action.payload.data.filter((product) => {
                    const productName = product.title.toLowerCase()
                    return (
                        productName.includes(searchItemName)
                    )
                }
            )
            state.searchResult = searchFilter
            state.searchItemName = searchItemName

        }


    }
})


export const {
    setSearchResult,
    changePageNumber,
    registerNotification,
    addToCart,
    deleteFromCart,
    plus,
    minus,
    closeOpenDeleteConfirm,
    addToIdCatcher,
    hideNotificationMessage,
    clearNotificationMessage
} = shoppingSlice.actions;
export default shoppingSlice.reducer