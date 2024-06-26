import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoResult from "./components/TodoResult";
import useTodos from "./hooks/useTodos";

function App() {
	const {
		todos,
		addTodo,
		setCompletedTodo,
		deleteTodo,
		deleteAllCompletedTodos,
	} = useTodos();

	return (
		<main className="py-10 h-screen space-y-5">
			<h1 className="font-bold text-3xl text-center">Todos</h1>
			<div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
				<AddTodoForm addTodo={addTodo} />
				<TodoList
					todos={todos}
					setCompletedTodo={setCompletedTodo}
					deleteTodo={deleteTodo}
				/>
				<TodoResult
					todos={todos}
					deleteAllCompletedTodos={deleteAllCompletedTodos}
				/>
			</div>
		</main>
	);
}

export default App;
