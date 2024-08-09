import styles from "./App.module.css";
import Field from "./components/Field/Field";
import Information from "./components/Information/Information.js";
import PropTypes from "prop-types";

const AppLayout = ({
	isDraw,
	isGameEnded,
	currentPlayer,
	field,
	handleClick,
	resetGame,
}) => {
	return (
		<div className={styles.app}>
			<div className={styles.game}>
				<Information
					isDraw={isDraw}
					isGameEnded={isGameEnded}
					currentPlayer={currentPlayer}
				/>
				<Field field={field} handleClick={handleClick} />
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
};

AppLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	field: PropTypes.array,
	handleClick: PropTypes.func,
	resetGame: PropTypes.func,
};

export default AppLayout;
