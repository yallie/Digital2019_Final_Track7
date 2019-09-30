import React from 'react'
import { useState } from 'react'
import { ImportButton } from './ImportButton';

interface IObject {
    type: "line" | "i-text" | "image"
    left: number
    top: number
    width: number
    height: number
}

class Marker implements IObject {
    "type": "i-text"
    "version": "3.4.0"
    "originX": "left"
    "originY": "top"
    "left": number
    "top": number
    "width": 45
    "height": 68
    "fill": "rgba(255,0,0,1)"
    "scaleX": 0.5
    "scaleY": 0.5
    "opacity": 1
    "shadow": null
    "visible": true
    "clipTo": null
    "backgroundColor": ""
    "fillRule": "nonzero"
    "paintFirst": "fill"
    "globalCompositeOperation": "source-over"
    "transformMatrix": null
    "skewX": 0
    "skewY": 0
    "text": " "
    "fontSize": 60
    "fontWeight": 900
    "fontFamily": "Font Awesome 5 Free"
    "fontStyle": "normal"
    "lineHeight": 1.16
    "underline": false
    "overline": false
    "linethrough": false
    "textAlign": "left"
    "textBackgroundColor": ""
    "charSpacing": 0
    "id": "fbe5a7ed-3ab8-447a-b483-835f5034cd4e"
}

export default function Optimizer() {
    const load = (jsonData: string) => {
        const map = JSON.parse(jsonData) as any
        const objects = map.objects as any[]
        const marker = new Marker()
        marker.left = 300
        marker.top = 300
        objects.push(marker)
    }

    return (
        <div>
            <p>Загрузите карту, чтобы расставить чекпойнты</p>
            <ImportButton onLoad={load} />
        </div>
    )
}
