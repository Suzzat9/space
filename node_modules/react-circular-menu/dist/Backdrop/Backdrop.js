import React from "react";
import { StyledBackdrop, StyledBackdropFocus } from "./StyledBackdrop";
export var Backdrop = function (props) { return (React.createElement(React.Fragment, null,
    props.active && React.createElement(StyledBackdrop, { onClick: props.onClick }),
    React.createElement(StyledBackdropFocus, { className: props.className }, props.children))); };
