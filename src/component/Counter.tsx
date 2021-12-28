import React, { SyntheticEvent } from 'react';
//import { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement , increment } from '../redux/counterSlice';
import { changeTitle } from '../redux/TitleSlice';

export function Counter() {
    //const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch();
    const [value, setValue] = React.useState<string>('');
    // const vel = (event:SyntheticEvent) =>{
    //     event.preventDefault();
    // }
    return (
        <>
            <div>
                <div>
                    <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                    >
                    Increment
                    </button>
                    {/* <span>{count}</span> */}
                    <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                    >
                    Decrement
                    </button>
                    <br/>
                    <div>
                        <input 
                        value={value}
				        onChange={(event) => setValue(event.target.value)}
                        />
                        <button onClick={()=>dispatch(changeTitle(value))}>change title</button>
                    </div>
                </div>
            </div>
        </>
    );
};

