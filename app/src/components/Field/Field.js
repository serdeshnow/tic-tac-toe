import { useState } from "react";
import { FieldLayout } from "./FieldLayout";
import PropTypes from "prop-types";

const Field = ({ field, setField, currentPlayer }) => {
	return <FieldLayout field={field} setField={setField} currentPlayer={currentPlayer} />;
};

Field.propTypes = {
	field: PropTypes.array,
};

export default Field;
