import React from 'react';
import { Table, Divider, Tag } from 'antd';

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

import { trackedItems, ITrackedItem } from '../data/tasks'

const columns = [
    {
        title: 'Код',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: 'Описание задачи',
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Позиций',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Ответственный',
        dataIndex: 'driver',
        key: 'driver',
    },
    {
        title: 'Статус задачи',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: any[]) => (
            <span>
                {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'отклонение' || tag === 'задержка' || tag == 'связь утеряна') {
                    color = 'volcano';
                }
                return (
                    <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                    </Tag>
                );
                })}
            </span>
        ),
    },
    {
        title: 'Действия',
        key: 'action',
        render: (text: string, record: any) => (
            <span>
                <a>Чат с исполнителем</a>
                <Divider type="vertical" />
                <a>Сменить ответственного</a>
                <Divider type="vertical" />
                <a>Отменить задание</a>
            </span>
        ),
    },
];

export default function TaskList() {
    return (
        <Table
            columns={columns}
            dataSource={trackedItems}
            expandedRowRender={
                // <p style={{ margin: 0 }}>Hello!</p>
                // 49.299952 55.611509 -- Казань-Экспо (пусто)
                // 50.879, 4.6997 -- оригинал
                // 50.874, 4.6947 -- оригинал маркер
                // 55.641357, 37.687478
                (record: ITrackedItem) => (
                    <Map center={record.mapCenter} zoom={15} width={600} height={400}>
                        <Marker anchor={record.mapPosition} payload={1} onClick={
                            ({ event, anchor, payload }: { event: any, anchor: any, payload: any }) => {}
                        } />

                        <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
                            <img src='pigeon.jpg' width={240} height={158} alt='' />
                        </Overlay>
                    </Map>
                )
            }
        />
    )
}