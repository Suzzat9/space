import React from 'react';
import asteroid_back from "./asteroid_background.jpg";


class AsteroidInfo extends React.Component {

    constructor(props) {
        super(props)
    }

    render = () => {
        if (this.props.selectedAsteroidName) {
            return (
                <div className="border shadow p-5  rounded text-center"
                    style={{ backgroundImage: `url(${asteroid_back})`, backgroundRepeat: "no-repeat" }}>
                    <h6 className="text-white"> Name : {this.props.selectedAsteroidName} </h6>

                    <p className="text-white">
                        <span className="badge bg-primary rounded-pill">
                            {this.props.selectedAsteroidminSize}
                        </span>
                        <span className="ps-4">Min diameter, meters</span>
                    </p>
                    <p className="text-white">
                        <span className="badge bg-primary rounded-pill">
                            {this.props.selectedAsteroidmaxSize}
                        </span>
                        <span className="ps-4">Max diameter, meters</span>
                    </p>
                </div >
            )
        } else {
            return (
                <div className="col-sm-4">
                </div >
            )
        }
    }
}

export default AsteroidInfo;