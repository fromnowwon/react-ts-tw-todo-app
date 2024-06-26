import { Todo } from "../types/todo";

interface TodoResultProps {
	todos: Todo[];
	deleteAllCompletedTodos: () => void;
}

const TodoResult = ({ todos, deleteAllCompletedTodos }: TodoResultProps) => {
	const completedTodos = todos.filter((todo) => todo.completed);

	return (
		<div className="text-center space-y-2 mt-4">
			{todos.length > 0 && (
				<>
					<p className="text-sm font-medium">
						{Math.floor(
							(Number(completedTodos.length) / Number(todos.length)) * 100
						)}
						% 완료
					</p>
					{completedTodos.length > 0 && (
						<button
							onClick={deleteAllCompletedTodos}
							className="text-red-500 hover:underline text-sm font-medium"
						>
							완료된 할 일 모두 삭제
						</button>
					)}
				</>
			)}
		</div>
	);
};

export default TodoResult;
