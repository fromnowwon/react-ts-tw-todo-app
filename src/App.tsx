import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoResult from "./components/TodoResult";
import useTodos from "./hooks/useTodos";

function App() {
	const { todos, addTodo, setCompletedTodo, deleteTodo } = useTodos();

	return (
		<main>
			<AddTodoForm addTodo={addTodo} />
			<TodoList
				todos={todos}
				setCompletedTodo={setCompletedTodo}
				deleteTodo={deleteTodo}
			/>
			<TodoResult todos={todos} />
		</main>
	);
}

export default App;
