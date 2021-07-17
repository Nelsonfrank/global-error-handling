import React from "react";

const TodoItem = ({ itemNo, todo, onDelete }) => {
	const handleDeleteTodo = (index) => {
		onDelete(index);
	};
	return (
		<div className='flex justify-between items-center text-xl w-full border border-black py-6 px-3 rounded-sm my-2'>
			<div className='flex '>
				<span className='mr-2'>{itemNo + 1}&#46;</span>
				<p className=''>{todo}</p>
			</div>
			<span onClick={() => handleDeleteTodo(itemNo)}>
				<svg
					version='1.1'
					xmlns='http://www.w3.org/2000/svg'
					width='25'
					height='25'
					viewBox='0 0 32 32'
				>
					<title>delete</title>
					<path
						fill='red'
						d='M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z'
					></path>
					<path
						fill='red'
						d='M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z'
					></path>
				</svg>
			</span>
		</div>
	);
};

const TodosList = ({ todos, onDelete }) => {
	return (
		<section className='flex flex-col items-start w-full md:w-3/4 mx-auto mt-12 '>
			{todos.map((todo, index) => (
				<TodoItem todo={todo} itemNo={index} onDelete={onDelete} />
			))}
		</section>
	);
};

export default TodosList;
