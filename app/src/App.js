import AppLayout from "./AppLayout.js";
import { useState } from "react";

// Не видел смысла в InformationLayout и FieldLayout

function App() {
	const PLAYER = {
		cross: "X",
		nought: "O",
	};

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.cross);
	const [field, setField] = useState(Array(9).fill(""));
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

	const checkWinner = (field, currentPlayer) => {
		return WIN_PATTERNS.some((pattern) =>
			pattern.every((index) => field[index] === currentPlayer),
		);
	};

	const resetGame = () => {
		setCurrentPlayer("X");
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(""));
	};

	const handleClick = (index) => {
		if (isGameEnded || isDraw) {
			resetGame(); // Start new game on field click
		} else if (!field[index]) {
			const newField = [
				...field.slice(0, index),
				currentPlayer,
				...field.slice(index + 1),
			];

			setField(newField);
			// Winner
			if (checkWinner(newField, currentPlayer)) {
				setIsGameEnded(true);
				return;
			}
			// Draw
			if (newField.every((cell) => cell !== "")) {
				setIsDraw(true);
				return;
			}
			// ChangeCurrentPlayer
			setCurrentPlayer((prev) => (prev === PLAYER.cross ? PLAYER.nought : PLAYER.cross));
		}
	};

	return (
		<AppLayout
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			field={field}
			handleClick={handleClick}
			resetGame={resetGame}
		/>
	);
}

export default App;
