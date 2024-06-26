import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoResult from "./components/TodoResult";
import useTodos from "./hooks/useTodos";

function App() {
	const { todos, addTodo, setCompletedTodo } = useTodos();

	return (
		<main>
			<AddTodoForm addTodo={addTodo} />
			<TodoList todos={todos} setCompletedTodo={setCompletedTodo} />
			<TodoResult todos={todos} />
		</main>
	);
}

export default App;
