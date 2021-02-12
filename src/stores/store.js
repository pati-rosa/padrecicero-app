import { action, createStore } from 'easy-peasy';

const store = createStore({
    lastAddedProduct: undefined,
    setLastAddedProduct: action((state, payload) => {
        state.product = payload;
    }),
    category: undefined,
    setCategory: action((state, payload) => {
        state.category = payload;
    })
});

export default store;