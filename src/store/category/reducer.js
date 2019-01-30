import state from './state'
import * as type from './type'

const reducer = (previousState = state, action) => {
    let new_state = { ...previousState
    }
    switch (action.type) {
        case type.GET_CATEGORY:
            new_state.category = action.payLoad
            break;
        case type.GET_NAVS:
            new_state.nav = action.payLoad
            break;
        case type.GET_CONTENTS:
            new_state.contents = action.payLoad
            break;
        case type.GET_BRANDS:
            new_state.brands = action.payLoad
            break;
        case type.GET_BRANDSCONTENT:
            new_state.brandsContent = action.payLoad
            break;
        default:
            break;
    }
    return new_state
}

export default reducer