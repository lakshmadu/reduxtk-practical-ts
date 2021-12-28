import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../redux/todoSlice';

interface Itodo {
    id:Date ;
    title:string;
    completed:boolean;
}

const App: React.FC<Itodo> = ({id,title,completed }) => {
    const dispatch = useDispatch();

	const handleCheckBoxClick = () =>{
		dispatch(toggleComplete({
			id,
			completed:!completed
		}));
	};
	const handleDeleteClick = () =>{
		dispatch(deleteTodo({id}));
	};

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox'
					className='mr-3' 
					checked={completed} 
					onClick={handleCheckBoxClick}
					>
					</input>
					{title}
				</span>
				<button
				onClick={handleDeleteClick} 
				className='btn btn-danger'
				>Delete</button>
			</div>
		</li>
	);
};

export default App;