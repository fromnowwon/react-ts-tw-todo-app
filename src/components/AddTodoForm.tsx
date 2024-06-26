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
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={input}
					onChange={handleChangeInput}
					placeholder="내용을 입력해주세요"
				/>
				{errorMessage && <p>{errorMessage}</p>}
				<button type="submit">추가</button>
			</form>
		</div>
	);
};

export default AddTodoForm;
