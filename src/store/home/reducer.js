import state from './state'
import * as type from './type'

const reducer = (previousState = state, action) => {
    let new_state = { ...previousState
    }
    switch (action.type) {
        case type.GET_HOME:
            new_state.home = action.payLoad
            break;
        case type.GET_TAB:
            new_state.tab = action.payLoad
            break;
        case type.GET_NAV:
            new_state.nav = action.payLoad
            break;
        case type.GET_HOMEPAGE:
            new_state.homepage = action.payLoad
            break;
        case type.GET_BANNER:
            new_state.banner = action.payLoad
            break;
        case type.GET_NEWBEAUTY:
            new_state.newbeauty = action.payLoad
            break;
        case type.GET_NBMUYINGTOP:
            new_state.nbmuyingtop = action.payLoad
            break;
        case type.GET_NBGUOJITOP:
            new_state.nbguojitop = action.payLoad
            break;
        case type.GET_JIADIAN:
            new_state.jiadian = action.payLoad
            break;
        case type.GET_JIAJU:
            new_state.jiaju = action.payLoad
            break;
        case type.GET_LIFEMARKET:
            new_state.lifemarket = action.payLoad
            break;
        case type.GET_LUX:
            new_state.lux = action.payLoad
            break;
        default:
            break;
    }

    return new_state
}

export default reducer