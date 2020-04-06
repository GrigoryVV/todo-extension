import React from "react";
import css from "./MyButton.module.css";

const MyButton = ({name, className, isSymbol, ...rest}) => {

	let classForBtn = css.button;
	if (className) {
		classForBtn += ` ${className}`;
	}
	if (isSymbol) {
		classForBtn += ` ${css.symbolBtn}`
	}

	return (
		<button
			className={classForBtn}
			{...rest}
		>
			<span>{name}</span>
		</button>
	);
};

export default MyButton;
