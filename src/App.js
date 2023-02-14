import './App.css';
import React from 'react';
import EventList from './EventList'
import AsteroidList from './AsteroidList'
import CirclesMenu from './CirclesMenu'
import bg from "./bg.jpg";

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            events: [],
            asteroids: []
        }
    }


    loadEvents = async (e) => {
        const httpResponse = await
            fetch("https://eonet.gsfc.nasa.gov/api/v3/events?status=all&start=2022-12-01&end=2022-12-08")
        const events = await httpResponse.json()
        var geom = events.events[0].geometry.length
        // console.log(events.events[0].geometry[geom - 1].coordinates)
        //console.log(events.events)
        this.setState({ events: events.events })
    }

    loadAsteroids = async (e) => {
        const httpResponse2 = await
            fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-12-01&end_date=2022-12-08&api_key=0fIJWl1FZha9NvSMFA8qJzUq8H06Gd4elLURecDo")
        const asteroids = await httpResponse2.json()
        for (var property in asteroids.near_earth_objects) {
            var asteroid_list = asteroids.near_earth_objects[property]
        }
        this.setState({ asteroids: asteroid_list })
        console.log(asteroid_list)
    }


    render() {

        return (
            <><div><h1 className="text-white"
                style={{ textAlign: 'center' }}> The Earth Observatory </h1>
                <p className="text-white" style={{ textAlign: 'center' }}>A place to observe Earth from space!</p>
                <p className="text-white" style={{ textAlign: 'center' }}>Click on the left side menu to view natural events and recent asteroids.
                    Then click on each item in each of the lists that appear</p>
            </div>
                <div className="container-fluid p-0" style={{
                    backgroundImage: `url(${bg})`,
                    height: '250vh',
                    marginTop: '-160px',
                    backgroundSize: 'cover', backgroundRepeat: "no-repeat",
                }}>&emsp;
                    <CirclesMenu
                        onClickLoadAll={this.loadEvents} onClickLoadAsteroids={this.loadAsteroids} />
                    <EventList events={this.state.events} />
                    <AsteroidList asteroids={this.state.asteroids} />
                </div></>

        )
    }

}
export default App;
