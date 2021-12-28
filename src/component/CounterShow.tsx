import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


const CounterShow = () => {
    const count = useSelector((state:RootState)=>state.counter.value);
    const title = useSelector((state:RootState)=>state.titles.title)
    //const dispatch = useDispatch()
    

    return (
        <>
            <label style={{backgroundColor:"red"}}>{count}</label><br/>
            <label style={{backgroundColor:"red"}}>{title}</label>
        </>
    );
};

export default CounterShow;