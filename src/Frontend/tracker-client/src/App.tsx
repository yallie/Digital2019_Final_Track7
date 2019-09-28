import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { useState } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import TaskList from './components/TaskList';
import Overview from './components/Overview';
import PlanEditor from './components/PlanEditor';

const { Header, Content, Footer } = Layout;

type Page =
    'main'
    | 'tasks'
    | 'maps'
    | 'plan'
    | 'admin'

function renderPage(page: Page) {
    switch (page) {
        case 'main':
            return <Overview/>
        case 'tasks':
            return <TaskList/>
        case 'plan':
            return <PlanEditor />
        default:
            return '404'
    }
}

const App: React.FC = () => {

	const [page, setPage] = useState('tasks' as Page)
	const getSetPage = (page: Page) => () => setPage(page)

    const getSetPage1 = () => {
        return () =>{
            window.open(
                'http://localhost:8080',
                '_blank' // <- This is what makes it open in a new window.
            );
        }
    }

	return (
		<Layout className="layout">
			<Header>
				<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					selectedKeys={[page]}
					style={{ lineHeight: '64px' }}
				>
					<Menu.Item key="main" onClick={getSetPage("main")}>Главная</Menu.Item>
					<Menu.Item key="tasks" onClick={getSetPage("tasks")}>Мониторинг задач</Menu.Item>
					<Menu.Item key="maps" onClick={getSetPage1()}>Редактор карт1</Menu.Item>
					<Menu.Item key="plan" onClick={getSetPage('plan')}>Редактор карт2</Menu.Item>
					<Menu.Item key="admin" onClick={getSetPage("admin")}>Администратор</Menu.Item>
				</Menu>
			</Header>

			<Content style={{ padding: '0 50px' }}>
				<Breadcrumb style={{ margin: '16px 0' }}>
					<Breadcrumb.Item>Цифровой прорыв 2019</Breadcrumb.Item>
					<Breadcrumb.Item>РосАтом</Breadcrumb.Item>
					<Breadcrumb.Item>Умная логистика</Breadcrumb.Item>
				</Breadcrumb>

				<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
					{renderPage(page)}
				</div>

			</Content>

			<Footer style={{ textAlign: 'center' }}>Не паникуй! ©2019 Цифровой прорыв</Footer>
		</Layout>
	);
}

export default App;
