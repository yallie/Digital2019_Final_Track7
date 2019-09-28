import React from 'react'
import { useState } from 'react'

import Designer, { Rectangle } from 'react-designer'

export default function PlanEditor() {
    const [objects, setObjects] = useState([
        {type: "rect", x: 50, y: 70, fill: "red"}
      ] as any[])

    return (
        <Designer width={250} height={350}
            objectTypes={{
                'text': Text,
                'rect': Rectangle
            }}
            onUpdate={(objects: any[]) => setObjects(objects)}
            objects={objects}
        />
    )
}
