import React from 'react';
import { Table, Divider, Tag, Modal, Col, Row, Select, Button, Comment, Avatar, Input, Form, Popconfirm } from 'antd';

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

import { trackedItems, ITrackedItem, drivers } from '../data/tasks'
import TrackedItemArticles from './TrackedItemArticles';
import TextArea from 'antd/lib/input/TextArea';

const chatStub = (n: string) => () => {
    const hisAvatar = <Avatar
        src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4e/4ea16cbf6b6dc436b7845cca081960ec33e5b10a.jpg"
        alt={n}
    />

    const myAvatar = <Avatar
        src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ea/eabf1f87c69a23f0221672f7ee8a2f83487e7b18.jpg"
        alt={n}
    />

    Modal.info({
        title: "Чат: " + n, // https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png
        content: (
            <div>
                <Comment author={<a>{n}</a>} avatar={hisAvatar} content={<p>Босс, похоже,у нас проблемы!</p>} datetime={"сегодня 10:12"} >
                    <Comment author={<a>Я</a>} avatar={myAvatar} content={<p>Что случилось?</p>} datetime={"сегодня 10:12"} />
                </Comment>
                <Comment author={<a>{n}</a>} avatar={hisAvatar} content={<p>Контейнер не проходит в ворота.</p>} datetime={"сегодня 10:12"} />
                <Comment
                    author={<a>Я</a>} avatar={myAvatar}
                    content={
                        <div>
                            <Form.Item>
                                <TextArea rows={4} />
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" type="primary">
                                    Отправить
                                </Button>
                            </Form.Item>
                        </div>
                    }
                />
            </div>
        ),
        okText: "Закрыть чат",
        okType: "danger"
    })
}

const columns = [
    {
        title: 'Ответственный',
        dataIndex: 'driver',
        key: 'driver',
        render: (n: string) => <a onClick={chatStub(n)}>{n}</a>
    },
    {
        title: 'Код задачи',
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
                <a onClick={chatStub(record.driver)}>Чат с исполнителем</a>
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
                <Popconfirm
                    title="Вы уверены, что хотите отменить задание?"
                    okText="Да"
                    cancelText="Нет"
                >
                    <a>Отменить задание</a>
                </Popconfirm>
            </span>
        ),
    },
];

export default function TaskList() {
    return (
        <div>
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
                            <Col span={16}>
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
                            <Col span={8}>
                                <TrackedItemArticles record={record} />
                            </Col>
                        </Row>
                    )
                }
            />
            <Button type="primary">Добавить задание</Button>
        </div>

    )
}