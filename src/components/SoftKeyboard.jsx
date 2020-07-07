import React from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const SoftKeyboard = (props) => {
    return <Keyboard onChange={props.onChange} onKeyPress={props.onKeyPress} theme={"hg-theme-default myTheme1"} />;
};

export default SoftKeyboard;
