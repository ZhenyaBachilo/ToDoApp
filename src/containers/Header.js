import React from 'react';
import { connect } from 'react-redux';
import {ProgressBar} from '../components/ProgressBar';
import {SearchBar} from '../components/SearchBar';
import {searchTask} from '../state-management/actions/actions';


const Header = ({tasks,searchTask,resetSearchInput}) =>{
    return(
        <div className='header'>
            <SearchBar tasks={tasks} searchTask={searchTask} />
            <ProgressBar tasks={tasks}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        tasks: state.TaskReducer
    }   
}

const mapDispatchToProps ={
    searchTask: searchTask
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);