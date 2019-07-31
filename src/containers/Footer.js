import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../state-management/actions/actions';
import { C } from '../state-management/constants/constants';
import { Button, ButtonToolbar } from 'react-bootstrap';


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
            <ButtonToolbar className='ButtonToolbar_edit'>
                <span>Filter tasks:</span>
                {BTN_Filters.map(({ text, filter }) => {
                    return (
                        <Button
                            size="sm"
                            variant="outline-info"
                            key={filter}
                            onClick={() => selectFilter(filter)}
                        >{text}
                        </Button>
                    )
                })}
            </ButtonToolbar>
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