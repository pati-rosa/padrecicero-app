import { action, createStore } from 'easy-peasy';

const store = createStore({
    lastAddedProduct: undefined,
    setLastAddedProduct: action((state, payload) => {
        state.lastAddedProduct = payload;
    }),
    category: undefined,
    setCategory: action((state, payload) => {
        state.category = payload;
    })
});

export default store;