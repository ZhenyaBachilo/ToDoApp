import React from 'react';
import { Filler } from './Filler';

export const ProgressBar = (props) => {
    return (
        <>
            <div className='progressBar'>
                <Filler tasks={props.tasks} />
            </div>
        </>
    )
}