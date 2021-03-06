import React, { useState } from 'react'
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

import { trackedItems, ITrackedItem } from '../data/tasks'
import { Modal, Row, Col } from 'antd';
import TrackedItemArticles from './TrackedItemArticles';

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

export default function Overview() {
    const [lat, setLat] = useState(55.704132)
    const [lng, setLng] = useState(37.608803)
    const [zoom, setZoom] = useState(13)
    const position: [number, number] = [lat, lng]

    const [selectedRecord, setSelectedRecord] = useState(null as ITrackedItem | null)

    return (
        <Row>
            <Col span={16}>
                <Map center={position} zoom={zoom} width={600} height={400}>
                    {trackedItems.map(p =>
                        <Marker key={p.key} anchor={p.mapPosition} payload={2} onClick={
                            ({ event, anchor, payload }: { event: any, anchor: any, payload: any }) => {
                                setSelectedRecord(p)
                            }
                        } />)
                    }

                    <Overlay anchor={position} offset={[120, 79]}>
                        <img src='pigeon.jpg' width={240} height={158} alt='' />
                    </Overlay>
                </Map>
            </Col>
            <Col span={8}>
                {selectedRecord && <TrackedItemArticles record={selectedRecord} displayHeader={true} />}
                {!selectedRecord && "Выберите маркер, чтобы посмотреть детали грузоотправления"}
            </Col>
        </Row>
    );
}
