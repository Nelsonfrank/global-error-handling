import React from "react";

const TodoItem = ({ itemNo, todo }) => {
	return (
		<div className='flex text-xl w-full border border-black py-6 px-3 rounded-sm my-2'>
			<span className='mr-2'>{itemNo}&#46;</span>
			<p className=''>{todo}</p>
		</div>
	);
};

const TodosList = ({ todos }) => {
	return (
		<section className='flex flex-col items-start w-3/4 mx-auto mt-12 '>
			{todos.map((todo, index) => (
				<TodoItem todo={todo} itemNo={index + 1} />
			))}
		</section>
	);
};

export default TodosList;
