import React from 'react';
import { Table, Divider, Tag, Modal, Col, Row, Select } from 'antd';

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

import { trackedItems, ITrackedItem, drivers } from '../data/tasks'
import TrackedItemArticles from './TrackedItemArticles';

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
        render: (n: string) => n
    },
    {
        title: 'Статус задачи',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: string[]) => (
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
        render: (text: string, record: ITrackedItem) => (
            <span>
                <a>Чат с исполнителем</a>
                <Divider type="vertical" />
                <a onClick={() => {
                    let driverChange = (v: string) => {
                        record.driver = v
                    }
                    Modal.confirm({
                        title: "Смена ответственного",
                        content: (
                            <Select defaultValue={record.driver} onChange={driverChange}>
                                {drivers.map(dr =>
                                    <Select.Option value={dr}>
                                        {dr}
                                    </Select.Option>)
                                }
                            </Select>
                        )
                    })
                }}>Сменить ответственного</a>
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
                    <Row type="flex">
                        <Col span={12}>
                            <Map center={record.mapCenter} zoom={15} width={600} height={400}>
                                <Marker anchor={record.mapPosition} payload={record} onClick={
                                    ({ event, anchor, payload }: { event: any, anchor: any, payload: ITrackedItem }) => {
                                        Modal.info({
                                            title: payload.name,
                                            content: (
                                                <div>
                                                    <h3>{payload.driver}</h3>
                                                    <ol>
                                                        {payload.articles.map(a => <li key={a[0]}>{a[0]} — {a[1]} шт.</li>)}
                                                    </ol>
                                                </div>
                                            )
                                        })
                                    }
                                } />

                                <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
                                    <img src='pigeon.jpg' width={240} height={158} alt='' />
                                </Overlay>
                            </Map>
                        </Col>
                        <Col span={12}>
                            <TrackedItemArticles record={record} />
                        </Col>
                    </Row>
                )
            }
        />
    )
}