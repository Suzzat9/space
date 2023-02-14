

// Import the circular menu
import {
    CircleMenu,
    CircleMenuItem,
    TooltipPlacement,
} from "react-circular-menu";
import React from "react";

class CirclesMenu extends React.Component {

    render = () => {
        const CircleMarkup = (

            <CircleMenu
                startAngle={0}
                rotationAngle={90}
                itemSize={1}
                radius={3}

                rotationAngleInclusive={false}>
                <CircleMenuItem
                    onClick={this.props.onClickLoadAll}
                    tooltip="Natural Events observed"
                    tooltipPlacement={TooltipPlacement.Right}>


                </CircleMenuItem>
                <CircleMenuItem
                    onClick={this.props.onClickLoadAsteroids}
                    tooltip="Asteroids near Earth observed"
                    tooltipPlacement={TooltipPlacement.Right}>
                </CircleMenuItem>
            </CircleMenu>
        )

        return (
            <div className="row mt-5 justify-content-center">
                {CircleMarkup}
            </div>
        )
    }


}

export default CirclesMenu;