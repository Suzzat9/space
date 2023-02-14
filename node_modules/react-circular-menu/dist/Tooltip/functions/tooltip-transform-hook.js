import { useMemo } from "react";
import { TooltipPlacement } from "../library/types";
var tooltipPadding = 5;
export var useTooltipTransform = function (wrapper, tooltip, placement) {
    var calculateTransformStyle = function () {
        if (!wrapper || !tooltip) {
            return {};
        }
        var wrapperBoundingRect = wrapper.getBoundingClientRect();
        var wrapperWidth = wrapperBoundingRect.right - wrapperBoundingRect.left;
        var wrapperHeight = wrapperBoundingRect.bottom - wrapperBoundingRect.top;
        var tooltipBoundingRect = tooltip.getBoundingClientRect();
        var tooltipWidth = tooltipBoundingRect.right - tooltipBoundingRect.left;
        var tooltipHeight = tooltipBoundingRect.bottom - tooltipBoundingRect.top;
        var left = wrapperBoundingRect.left + wrapperWidth / 2 - tooltipWidth / 2;
        var top = wrapperBoundingRect.top + wrapperHeight / 2 - tooltipHeight / 2;
        switch (placement) {
            case TooltipPlacement.Top:
                top = wrapperBoundingRect.top - tooltipHeight - tooltipPadding;
                break;
            case TooltipPlacement.Bottom:
                top = wrapperBoundingRect.bottom + tooltipPadding;
                break;
            case TooltipPlacement.Left:
                left = wrapperBoundingRect.left - tooltipWidth - tooltipPadding;
                break;
            case TooltipPlacement.Right:
                left = wrapperBoundingRect.right + tooltipPadding;
                break;
        }
        return {
            transform: "translate3d(".concat(left, "px, ").concat(top, "px, 0px)"),
        };
    };
    return useMemo(function () { return calculateTransformStyle(); }, [wrapper, tooltip]);
};
