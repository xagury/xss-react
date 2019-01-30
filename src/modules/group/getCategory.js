import actionCreator from '../../store/category/actionCreator'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const GroupCategory = connect(state => state.category,
    dispatch => bindActionCreators(actionCreator,dispatch)
)

export default GroupCategory
