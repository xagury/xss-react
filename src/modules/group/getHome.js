import actionCreator from '../../store/home/actionCreator'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const GroupHome = connect(state => state.home,
    dispatch => bindActionCreators(actionCreator,dispatch)
)

export default GroupHome
