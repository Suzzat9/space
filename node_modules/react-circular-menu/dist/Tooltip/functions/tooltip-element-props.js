export var getTooltipElementProps = function (elementProps, openTooltip, closeTooltip) { return ({
    onMouseEnter: function (event) {
        var _a;
        openTooltip();
        (_a = elementProps.onMouseEnter) === null || _a === void 0 ? void 0 : _a.call(elementProps, event);
    },
    onMouseLeave: function (event) {
        var _a;
        closeTooltip();
        (_a = elementProps.onMouseLeave) === null || _a === void 0 ? void 0 : _a.call(elementProps, event);
    },
    onFocus: function (event) {
        var _a;
        openTooltip();
        (_a = elementProps.onFocus) === null || _a === void 0 ? void 0 : _a.call(elementProps, event);
    },
    onBlur: function (event) {
        var _a;
        closeTooltip();
        (_a = elementProps.onBlur) === null || _a === void 0 ? void 0 : _a.call(elementProps, event);
    },
    onTouchStart: function (event) {
        var _a;
        openTooltip();
        (_a = elementProps.onTouchStart) === null || _a === void 0 ? void 0 : _a.call(elementProps, event);
    },
    onTouchEnd: function (event) {
        var _a;
        closeTooltip();
        (_a = elementProps.onTouchEnd) === null || _a === void 0 ? void 0 : _a.call(elementProps, event);
    },
}); };
