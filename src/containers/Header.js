import React from 'react';
import { connect } from 'react-redux';
import {ProgressBar} from '../components/ProgressBar';

const Header = ({tasks}) =>{
    return(
        <div>
            <ProgressBar tasks={tasks}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        tasks: state.TaskReducer
    }   
}

export default connect(mapStateToProps)(Header);