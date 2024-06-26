import { Todo } from "../types/todo";

interface TodoResultProps {
	todos: Todo[];
	deleteAllCompletedTodos: () => void;
}

const TodoResult = ({ todos, deleteAllCompletedTodos }: TodoResultProps) => {
	const completedTodos = todos.filter((todo) => todo.completed);

	return (
		<div>
			{todos.length > 0 ? (
				<>
					<p>
						{Math.floor(
							(Number(completedTodos.length) / Number(todos.length)) * 100
						)}
						% 완료
					</p>

					{completedTodos.length > 0 && (
						<button onClick={deleteAllCompletedTodos}>
							완료된 할 일 모두 삭제
						</button>
					)}
				</>
			) : (
				<p>아직 할 일 없음</p>
			)}
		</div>
	);
};

export default TodoResult;
