import { action, createStore } from 'easy-peasy';

const store = createStore({
    lastAddedProduct: undefined,
    setLastAddedProduct: action((state, payload) => {
        state.lastAddedProduct = payload;
    }),
    lastAddedSale: undefined,
    setLastAddedSale: action((state, payload) => {
        state.lastAddedSale = payload;
    }),
    category: undefined,
    setCategory: action((state, payload) => {
        state.category = payload;
    })
});

export default store;