import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UnSavedCounterSelector } from '../../../selector/HomepageSelector';
import { updateUnsavedCount } from '../../../store/actions/blacklist-actions';

const BlackList: React.FC<any> = () => {

    const dispatch = useDispatch();

    const {unSavedCount} = useSelector(UnSavedCounterSelector);
    
    const incrementCount = () => {
        dispatch(updateUnsavedCount(unSavedCount-1))
    }

    return (
        <div>
            <label>Blacklist Count : {unSavedCount} </label>
            <button onClick={()=> incrementCount()}>Increment Blacklist</button>
        </div>
    );
};


export default BlackList