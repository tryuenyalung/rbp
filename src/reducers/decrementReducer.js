import {Map} from 'immutable';

const initialState = Map({
    counter : 21
}) 

const decrement = (state) => {
    const counter = state.get('counter') - 1
    return state.merge( Map({counter}) )
}

export default (state = initialState, action) =>{
    switch (action.type) {

        case "DECREMENT": return decrement(state);
        default: return state;
        
    }

}


