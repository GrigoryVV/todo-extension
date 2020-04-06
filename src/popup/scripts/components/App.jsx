import React, { useState } from "react";
import { connect } from "react-redux";
import css from "./App.module.css";
import MyButton from "../../../common/components/MyButton/MyButton";
import Settings from "./Settings/Settings";
import { setPlace } from "../../../background/scripts/reducers/weatherReducer";
import { toggleOpenTodos } from "../../../background/scripts/reducers/todoReducer";

const App = (props) => {
    let [isSettingsOpen, setSettingsOpen] = useState(false);

	const toggleOpenWeather = () => {};
	const toggleOpenSettings = () => {
        setSettingsOpen(!isSettingsOpen);
    };
    if (isSettingsOpen) {
        return (
            <div className={css.container}>
                <Settings toggleOpenSettings={toggleOpenSettings}
					setPlace={props.setPlace}
				/>
            </div>
        );
    }

	return (
		<div className={css.container}>
			<h1 className={css.header}>TODO extension</h1>
			<div>
				<MyButton
					className={css.menuButton}
					name="Open task manager"
					onClick={props.toggleOpenTodos}
				/>
				<MyButton
					className={css.menuButton}
					name="Open weather badge"
					onClick={toggleOpenWeather}
				/>
				<MyButton
					className={css.menuButton}
					name="Settings"
					onClick={toggleOpenSettings}
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, {
	setPlace,
	toggleOpenTodos,
})(App);
