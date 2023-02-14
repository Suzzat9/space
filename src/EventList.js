import React from 'react';
import EventLoc from './EventLoc'


class EventList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            coordinates: null
        }

    }

    handleEventClick = (e) => {
        e.preventDefault();
        const EventIdentifier = e.currentTarget.getAttribute('data-event-id')
        const selectedEvent = this.props.events.find(event => event.id === EventIdentifier)
        if (selectedEvent) {
            //console.log(selectedEvent)

            var geom1 = selectedEvent.geometry.length

            //console.log(selectedEvent.geometry[geom1 - 1].coordinates)

            this.setState({
                coordinates: selectedEvent.geometry[0].coordinates
            })


        }
    }


    render = () => {
        const eventMarkup = (this.props.events.length > 0 &&
            this.props.events.map(event => {
                return (

                    <li onClick={this.handleEventClick} className="list-group-item bg-dark bg-gradient text-white" data-event-id={event.id} key={event.id}>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="m-0">{event.title}</p>
                        </div>
                    </li>
                )

            }
            )
        )
        return (
            <div className="row mt-5 justify-content-center">
                <div className="col-sm-5" >
                    <ul className="list-group">
                        {eventMarkup}
                    </ul>
                </div>
                <div className="col-sm-4">
                    <EventLoc coordinates={this.state.coordinates} />
                </div>
            </div>
        )

    }
}

export default EventList;