import { action, createStore } from 'easy-peasy';

const store = createStore({
    category: undefined,
    setCategory: action((state, payload) => {
        state.category = payload;
    })
});

export default store;