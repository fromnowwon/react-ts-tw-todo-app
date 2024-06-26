import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodos";

function App() {
	const { todos, addTodo, setCompletedTodo } = useTodos();

	return (
		<main>
			<AddTodoForm addTodo={addTodo} />
			<TodoList todos={todos} setCompletedTodo={setCompletedTodo} />
		</main>
	);
}

export default App;
