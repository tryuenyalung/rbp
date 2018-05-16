import {INCREMENT} from './../actions/increment'
import {Map} from 'immutable'

const initialState = Map({
    counter : 0
})

const increment = (state) => {
    //get counter key on Map
    const counter = state.get('counter') + 1;
    //return a new Map
    return state.merge(Map({ counter }));

}

export default (state = initialState, action) =>{
    switch (action.type) {

        case INCREMENT: return increment(state);
        default: return state;
        
    }

}


