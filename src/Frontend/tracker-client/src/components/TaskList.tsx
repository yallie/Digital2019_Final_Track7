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
        title: 'Исполнитель',
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
                <a>Сменить исполнителя</a>
                <Divider type="vertical" />
                <a>ОТМЕНА</a>
            </span>
        ),
    },
];

const data = [
  {
    key: '112312',
    name: 'Комплекты для сборки турбин в Цех2',
    age: 32,
    driver: 'Петр Капица',
    tags: ['ок', 'завершено'],
  },
  {
    key: '112316',
    name: 'Таблетки UF4 для ТВЭЛ в Цех3',
    age: 42,
    driver: 'Григорий Перельман',
    tags: ['в работе'],
  },
  {
    key: '112313',
    name: '',
    age: 32,
    driver: 'Алексей Новоселов',
    tags: ['отклонение', 'задержка'],
  },
];

export default function TaskList() {
    return <Table columns={columns} dataSource={data} />
}