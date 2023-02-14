import React from 'react';

class EventLoc extends React.Component {

    constructor(props) {
        super(props)
    }


    render = () => {
        if (this.props.coordinates) {
            const latitude = this.props.coordinates[0]
            const longitude = this.props.coordinates[1]
            const new_src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude +
                "&zoom=2&size=600x400&maptype=terrain&markers=color:red%7Clabel:E%7C+" + latitude + "," + longitude +
                "&key=AIzaSyB-oQnkpiDtJiV7YX05PQxmHJviThfoa3o"
            //console.log(new_src)
            return (
                <><p className="text-white">Event Location:</p>
                    <p className="text-white">Note: Some events may not map due to imprecise coordinate information from the API</p>
                    <img src={new_src} alt="event_loc" /></>
            )
        } else {
            return (
                <div className="col-sm-4">
                </div >
            )
        }
    }
}


export default EventLoc;