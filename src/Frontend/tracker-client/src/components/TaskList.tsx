import React from 'react';
import { Table, Divider, Tag } from 'antd';

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

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
        title: 'Мест',
        dataIndex: 'age',
        key: 'age',
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
                if (tag === 'отклонение' || tag === 'задержка') {
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

const data = [
  {
    key: '112316',
    name: 'Уран-гадолиниевые таблетки для ВВЭР-1000 в Цех3',
    age: 42,
    driver: 'Григорий Перельман',
    tags: ['в работе'],
    mapCenter: [55.641357, 37.687478],
    mapPosition: [55.642421, 37.683814]
  },
  {
    key: '112312',
    name: 'Лопасти для сборки турбин в Цех2',
    age: 32,
    driver: 'Петр Капица',
    tags: ['ок', 'завершено'],
    mapCenter: [55.641357, 37.687478],
    mapPosition: [55.642421, 37.683814],
  },
  {
    key: '112313',
    name: 'Защитные оболочки для ПЭЛ СУЗ в Цех3',
    age: 88,
    driver: 'Алексей Новоселов',
    tags: ['отклонение', 'задержка'],
    mapCenter: [55.641357, 37.687478],
    mapPosition: [55.642421, 37.683814],
  },
];

export default function TaskList() {
    return (
        <Table
            columns={columns}
            dataSource={data}
            expandedRowRender={
                // <p style={{ margin: 0 }}>Hello!</p>
                // 49.299952 55.611509 -- Казань-Экспо (пусто)
                // 50.879, 4.6997 -- оригинал
                // 50.874, 4.6947 -- оригинал маркер
                // 55.641357, 37.687478
                record => (
                    <Map center={[55.709780, 37.631195]} zoom={15} width={600} height={400}>
                        <Marker anchor={[55.709780, 37.631195]} payload={1} onClick={
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