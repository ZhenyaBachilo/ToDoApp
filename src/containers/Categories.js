import React from 'react';
import Form from '../components/Form';
import { List } from '../components/List';
import { connect } from 'react-redux';
import { addCategoryAction } from '../state-management/actions/actions'

function Categories(props) {
    return (
        <div className='categoryField'>
            <Form headerText={'Add new Category'} add={props.addCategory} />
            <List categories={props.categories} />
        </div>
    )
}

const mapDispatchToProps = {
    addCategory: addCategoryAction
}

const mapStateToProps = (state) => {

    return {
        categories: state.CategoriesReducer
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps
)(Categories);

