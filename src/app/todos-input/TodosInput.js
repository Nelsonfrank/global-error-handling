import React, { useState } from "react";

const TodosInput = ({ onSubmit }) => {
	const [todo, setTodo] = useState("");

	const handleChange = (e) => {
		e.preventDefault();
		setTodo(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(todo);
		setTodo("");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col items-center w-full md:w-3/4 mx-auto'
		>
			<input
				placeholder='Add your todo'
				onChange={handleChange}
				value={todo}
				className='w-full border border-black py-4 px-3 text-xl mb-8 rounded focus:outline-none'
			/>
			<button className='border border-black rounded py-3 px-1 text-xl w-1/2 md:w-1/4 focus:bg-blue-300 hover:bg-blue-100'>
				Add
			</button>
		</form>
	);
};

export default TodosInput;
