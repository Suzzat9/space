import React from 'react';
import AsteroidInfo from './AsteroidInfo'



class AsteroidList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedAsteroidName: null,
            selectedAsteroidminSize: null,
            selectedAsteroidmaxSize: null
        }

    }

    handleAsteroidClick = (e) => {
        e.preventDefault();
        const AsteroidIdentifier = e.currentTarget.getAttribute('data-asteroid-id')
        const selectedAsteroid = this.props.asteroids.find(asteroid => asteroid.id === AsteroidIdentifier)
        if (selectedAsteroid) {
            // console.log(selectedAsteroid)

            this.setState({
                selectedAsteroidName: selectedAsteroid.name,
                selectedAsteroidminSize:
                    selectedAsteroid.estimated_diameter.meters.estimated_diameter_min,
                selectedAsteroidmaxSize:
                    selectedAsteroid.estimated_diameter.meters.estimated_diameter_max
            })


        }
    }



    render = () => {
        const AsteroidMarkup = (this.props.asteroids.length > 0 &&
            this.props.asteroids.map(asteroid => {
                return (
                    <li onClick={this.handleAsteroidClick} className="list-group-item bg-dark bg-gradient text-white" data-asteroid-id={asteroid.id} key={asteroid.id}>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="m-0">{asteroid.name}</p>
                        </div>
                    </li>
                )

            }
            )
        )



        return (
            <div className="row mt-5 justify-content-center">
                <div className="col-sm-5">
                    <ul className="list-group">
                        {AsteroidMarkup}
                    </ul>
                </div>
                <div className="col-sm-4">
                    <AsteroidInfo selectedAsteroidName={this.state.selectedAsteroidName}
                        selectedAsteroidminSize={this.state.selectedAsteroidminSize}
                        selectedAsteroidmaxSize={this.state.selectedAsteroidmaxSize} />
                </div>
            </div>
        )

    }
}

export default AsteroidList;