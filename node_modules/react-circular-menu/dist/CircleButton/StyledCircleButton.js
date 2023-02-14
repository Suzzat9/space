var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var StyledCircleButton = function (tag) { return styled(tag)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 0.2rem solid #000000;\n  background: #ffffff;\n  text-decoration: none;\n  color: #000000;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: unset;\n  padding: 0.5rem;\n  transition: all 0.5s;\n  ", "\n\n  &:is(:hover, :focus, :active) {\n    color: #ffffff;\n    background: #000000;\n  }\n"], ["\n  border: 0.2rem solid #000000;\n  background: #ffffff;\n  text-decoration: none;\n  color: #000000;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: unset;\n  padding: 0.5rem;\n  transition: all 0.5s;\n  ", "\n\n  &:is(:hover, :focus, :active) {\n    color: #ffffff;\n    background: #000000;\n  }\n"])), function (_a) {
    var $size = _a.$size;
    return "\n    width: ".concat($size, "rem;\n    height: ").concat($size, "rem;\n  ");
}); };
export var StyledButton = StyledCircleButton("button");
export var StyledLink = StyledCircleButton("a");
var templateObject_1;
