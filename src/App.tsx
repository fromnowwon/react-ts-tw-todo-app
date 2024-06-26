import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodos";

function App() {
	const { todos } = useTodos();

	return (
		<main>
			<TodoList todos={todos} />
		</main>
	);
}

export default App;
