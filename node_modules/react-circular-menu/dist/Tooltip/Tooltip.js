import React, { Children, cloneElement, isValidElement, useRef, useState, } from "react";
import { createPortal } from "react-dom";
import { getTooltipElementProps } from "./functions/tooltip-element-props";
import { useTooltipTransform } from "./functions/tooltip-transform-hook";
import { TooltipPlacement } from "./library/types";
import { StyledTooltip } from "./StyledTooltip";
export var Tooltip = function (_a) {
    var title = _a.title, _b = _a.placement, placement = _b === void 0 ? TooltipPlacement.Top : _b, children = _a.children;
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = useState(null), tooltip = _d[0], setTooltip = _d[1];
    var wrapperRef = useRef(null);
    var tooltipStyles = useTooltipTransform(wrapperRef.current, tooltip, placement);
    var openTooltip = function () { return !isOpen && setIsOpen(true); };
    var closeTooltip = function () { return isOpen && setIsOpen(false); };
    if (!title || !isValidElement(children)) {
        return React.createElement(React.Fragment, null, children);
    }
    return (React.createElement("div", { ref: wrapperRef },
        React.createElement(React.Fragment, null,
            cloneElement(Children.only(children), getTooltipElementProps(children.props, openTooltip, closeTooltip)),
            isOpen &&
                createPortal(React.createElement(StyledTooltip, { style: tooltipStyles, ref: function (element) { return element && setTooltip(element); }, role: "tooltip" }, title), document.getElementsByTagName("body")[0]))));
};
