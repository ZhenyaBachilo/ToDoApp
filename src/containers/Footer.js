import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../state-management/actions/actions';
import {C} from '../state-management/constants/constants';

const BTN_Filters = [
    {
        text: 'All',
        filter: C.SHOW_ALL
    },
    {
        text: 'Completed',
        filter: C.SHOW_COMPLETED
    },
    {
        text: 'Active',
        filter: C.SHOW_ACTIVE
    }
]

function Footer({ selectFilter }) {
    return (
        <div className='footer'>
            <div className='btnGroup'>
                { BTN_Filters.map(({ text, filter }) => {
                    return (
                        <button
                            key={filter}
                            onClick={() => selectFilter(filter)}
                        >{text}
                        </button>
                    )
                })}
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        activeFilter: state.FilterTasks
    }
}

const mapDispatchToProps = {
    selectFilter: setVisibilityFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);