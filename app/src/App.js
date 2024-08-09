import styles from "./App.module.css";
import stylesI from "./components/Information/Information.module.css";
import stylesF from "./components/Field/Field.module.css";
// import Field from "./components/Field/Field";
// import Information from "./components/Information/Information";
import { useState } from "react";

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

	// const checkWinner = (field, currentPlayer) => {
	// 	WIN_PATTERNS.forEach((pattern) => {
	// 		const [a, b, c] = pattern;
	// 		if (field[a] && field[a] === field[b] && field[b] === field[c]) {
	// 			setIsGameEnded(true);
	// 			setCurrentPlayer(currentPlayer);
	// 		}
	// 	});
	// };

	const checkWinner = (field, currentPlayer) => {
		return WIN_PATTERNS.some((pattern) =>
			pattern.every((index) => field[index] === currentPlayer),
		);
	};

	const handleClick = (index) => {
		if (isGameEnded) {
			resetGame();
		} else if (!field[index]) {
			const newField = [
				...field.slice(0, index),
				currentPlayer,
				...field.slice(index + 1),
			];
			setField(newField);
			checkWinner(newField, currentPlayer);
			if (checkWinner(newField, currentPlayer)) {
				setIsGameEnded(true);
				console.log("winner");
				return;
			}
			if (newField.every((cell) => cell !== "")) {
				setIsDraw(true);
			}

			setCurrentPlayer((prev) => (prev === PLAYER.cross ? PLAYER.nought : PLAYER.cross));
		}
	};

	const resetGame = () => {
		setCurrentPlayer("X");
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(""));
	};

	return (
		<div className={styles.app}>
			<div className={styles.game}>
				<section className={`${stylesI.info}`}>
					{isDraw
						? "Ничья"
						: isGameEnded
							? `Победа: ${currentPlayer}`
							: `Ходит: ${currentPlayer}`}
				</section>
				<section className={stylesF.field}>
					{field.map((cell, index) => (
						<button
							className={`${stylesF.cell} ${field[index] && stylesF[field[index]]}`}
							onClick={() => handleClick(index)}
							key={index}
						/>
					))}
				</section>
				{isDraw || isGameEnded ? (
					<button className={styles.resetButton} onClick={resetGame}>
						Играть снова
					</button>
				) : (
					<div className={styles.void}></div>
				)}
			</div>
		</div>
	);
}

export default App;
