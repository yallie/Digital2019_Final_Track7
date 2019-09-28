import React from 'react'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.js'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

interface IState {
    lat: number,
    lng: number,
    zoom: number,
}

/* export default function Overview() {
    return (
        <p>Hello!</p>
    )
}*/

/*export default class SimpleExample extends React.Component<{}, State> {
    state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    }

    render() {
      const position: [number, number] = [this.state.lat, this.state.lng]
      return (
          <div style={{ height: "700px" }}>
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </Map>
          </div>
      )
    }
  }*/

export default class Overview extends React.Component<{}, IState> {
    constructor(props: any) {
      super(props)
      this.state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13
      }
    }

    render() {
      const position: [number, number] = [this.state.lat, this.state.lng];
      return (
        <div className="leaflet-container" style={{ height: "700px" }}>
            <Map center={position} zoom={this.state.zoom}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>
            </Marker>
            </Map>
        </div>
      );
    }
}
