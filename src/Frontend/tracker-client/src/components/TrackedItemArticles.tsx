import React from 'react'
import { Table } from 'antd';
import { ITrackedItem } from '../data/tasks';

const articleColumns = [{
    title: "Номенклатура",
    key: "0",
    dataIndex: "0",
}, {
    title: "Количество",
    key: "1",
    dataIndex: "1",
}]


export default function TrackedItemArticles(props: { record: ITrackedItem, displayHeader?: boolean }) {
    const table = <Table dataSource={props.record.articles} columns={articleColumns} />
    if (!props.displayHeader) {
        return table
    }

    return (
        <div>
            <h3>{props.record.name}</h3>
            <h4>Ответственный: {props.record.driver}</h4>
            {table}
        </div>
    )
}