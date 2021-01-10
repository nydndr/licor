import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { TodoContextType } from "../contexts/TodoContextType";
import { TodoContext } from "../contexts/TodoContext";

function TodoList() {
	const { todos } = useContext<TodoContextType>(TodoContext);

	console.log(todos);
	return (
		<table>
			<caption>
				<thead>
					<tr>
						<th>#</th>
						<th>Tarefa</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{todos?.map((todo) => (
						<TodoListItem todo={todo} key={todo.id} />
					))}
				</tbody>
			</caption>
		</table>
	);
}

export default TodoList;
