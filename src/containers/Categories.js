import React from 'react';
import Form from '../components/Form';
import { CategoryList } from '../components/CategoryList';
import { connect } from 'react-redux';
import { addCategoryAction } from '../state-management/actions/actions';
import { selectedCategoryId } from '../state-management/actions/actions';
import { deleteCategory } from '../state-management/actions/actions';
import { searchTask } from '../state-management/actions/actions';

function Categories(props) {
    return (
        <div className='categoryField'>
            <Form
                selectedCategoryId={props.selectedCategoryId}
                categories={props.categories}
                inputPlaceholder={'Add new Category'}
                add={props.addCategory}
            />
            <CategoryList
                selectedCategory={props.selectedCategory}
                categories={props.categories}
                selectedCategoryId={props.selectedCategoryId}
                deleteCategory={props.deleteCategory}
                searchTaskText={props.searchTaskText}
            />
        </div>
    )
}

const mapDispatchToProps = {
    addCategory: addCategoryAction,
    selectedCategoryId: selectedCategoryId,
    deleteCategory: deleteCategory,
    searchTaskText: searchTask
}

const mapStateToProps = (state) => {
    return {
        categories: state.CategoriesReducer,
        selectedCategory: state.selectedCategoryIdReducer,
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps
)(Categories);

