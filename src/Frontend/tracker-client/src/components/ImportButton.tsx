// Simple wrapper for the input file DOM element

import { Button, Tooltip } from 'antd'
import React, { CSSProperties, useRef } from 'react'

interface IProps {
    style?: CSSProperties
    text?: string
    onLoad?: (jsonData: string) => void
    renderText?: boolean
}

export function ImportButton(props: IProps) {
    const fileInput = useRef<HTMLInputElement>(null)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files && files.length) {
            const fileReader = new FileReader()
            fileReader.onload = ev => {
                const data = ev.target && (ev.target as any).result
                if (data && typeof data === "string" && props.onLoad) {
                    props.onLoad(data)
                    if (fileInput.current) {
                        fileInput.current.value = ''
                    }
                }
            }
            fileReader.readAsText(files[0])
        }
    }

    const handleClick = () => {
        if (fileInput.current) {
            fileInput.current.click()
        }
    }

    const text = props.text || "Import"
    const renderText = props.renderText !== false

    return (
        <Tooltip title={!renderText && text}>
            <input
                type='file'
                ref={fileInput}
                multiple={false}
                style={{ display: 'none' }}
                accept=".json"
                onChange={onChange}
            />
            <Button icon="upload" onClick={handleClick} style={props.style}>
                {renderText && text}
            </Button>
        </Tooltip>
    )
}
