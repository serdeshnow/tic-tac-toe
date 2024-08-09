import stylesF from "./Field.module.css";
import PropTypes from "prop-types";

const Field = ({ field, handleClick }) => {
	return (
		<section className={stylesF.field}>
			{field.map((cell, index) => (
				<button
					className={`${stylesF.cell} ${field[index] && stylesF[field[index]]}`}
					onClick={() => handleClick(index)}
					key={index}
				/>
			))}
		</section>
	);
};

Field.propTypes = {
	field: PropTypes.array,
	handleClick: PropTypes.func,
};

export default Field;
