import {create} from 'zustand'


export const useStore = create(set => {

    return {
        count: 0,
        incrementCount: () => set(state => ({count: state.count +1})),
        decrementCount: () => set(state => ({count: state.count - 1}))
    }
})