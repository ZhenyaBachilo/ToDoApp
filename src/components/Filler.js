import React from 'react';

export const Filler = ({ tasks,perc }) => {

    const CountPercentage = () => {
        if (!tasks.filter(task => task.completed).length) {
            return 0;
        } else {
            return (tasks.filter(task => task.completed).length / tasks.length) * 100;
        }
    }
    const percentage = CountPercentage();


    return (
        <>
            <div className='filler' style={{ width: percentage + '%' }}></div>
        </>
    )
}