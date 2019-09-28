import React from 'react';
import { Table, Divider, Tag } from 'antd';

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
  },
  {
    key: '112312',
    name: 'Лопасти для сборки турбин в Цех2',
    age: 32,
    driver: 'Петр Капица',
    tags: ['ок', 'завершено'],
  },
  {
    key: '112313',
    name: 'Защитные оболочки для ПЭЛ СУЗ в Цех3',
    age: 88,
    driver: 'Алексей Новоселов',
    tags: ['отклонение', 'задержка'],
  },
];

export default function TaskList() {
    return (
        <Table
            columns={columns}
            dataSource={data}
            expandedRowRender={record => <p style={{ margin: 0 }}>Hello!</p>}
        />
    )
}