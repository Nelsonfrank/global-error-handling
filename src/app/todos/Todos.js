import React, { useState } from "react";
import TodosInput from "../todos-input";
import TodosList from "../todos-list";
const Todos = () => {
	const [todoItems, setTodoItems] = useState([]);

	const handleSubmit = (todo) => {
		setTodoItems([todo, ...todoItems]);
	};

	const handleDeleteTodo = (todoIndex) => {
		setTodoItems(todoItems.filter((todo, index) => index !== todoIndex));
	};
	return (
		<section className='pt-20 w-3/4 mx-auto'>
			<h1 className='text-3xl text-center my-4 font-medium'>
				Simple Todos App
			</h1>
			<TodosInput onSubmit={handleSubmit} />
			<TodosList todos={todoItems} onDelete={handleDeleteTodo} />
		</section>
	);
};

export default Todos;
