import { useState } from "react";

interface AddTodoFormProps {
	addTodo: (title: string) => void;
}

const AddTodoForm = ({ addTodo }: AddTodoFormProps) => {
	const [input, setInput] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!input.trim()) return setErrorMessage("내용을 입력해주세요!");

		addTodo(input);
		setInput("");
		setErrorMessage("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="flex">
				<input
					type="text"
					value={input}
					onChange={handleChangeInput}
					placeholder="내용을 입력해주세요"
					className="rounded-s-md grow border border-gray-400 p-2"
				/>
				<button
					type="submit"
					className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
				>
					추가
				</button>
			</form>
			{errorMessage && (
				<p className="my-1 text-sm text-red-500">{errorMessage}</p>
			)}
		</div>
	);
};

export default AddTodoForm;
