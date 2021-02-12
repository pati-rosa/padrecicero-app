import { action, createStore } from 'easy-peasy';

const store = createStore({
    name: 'Vladimir',
    courses: 'learn easy peasy',
    category: undefined,
    setCategory: action((state, payload) => {
        state.category = payload;
    })
});

export default store;