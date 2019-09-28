export interface ITrackedItem {
    key: string
    quantity: number
    name: string
    driver: string
    tags: string[]
    mapCenter: [number, number]
    mapPosition: [number, number]
    articles: [string, number][]
}

export const trackedItems: ITrackedItem[] = [
    {
        key: '112316',
        name: 'Уран-гадолиниевые таблетки для ВВЭР-1000 в Цех3',
        quantity: 42,
        driver: 'Григорий Перельман',
        tags: ['в работе'],
        mapCenter: [55.641357, 37.687478],
        mapPosition: [55.642421, 37.683814],
        articles: [["ПНАЭГ-5-006", 8], ["ПНАЭГ-7-008", 4], ["ПНАЭГ-7-002", 10], ["НП-001 <3>", 5], ["ПНАЭГ-7-006", 1]]
    },
    {
        key: '112312',
        name: 'Лопасти для сборки турбин в Цех2',
        quantity: 32,
        driver: 'Петр Капица',
        tags: ['ок', 'завершено'],
        mapCenter: [55.709780, 37.631195],
        mapPosition: [55.709780, 37.631195],
        articles: [["ПНАЭГ-7-009", 4], ["ПБЯ РУ АС <4>", 1], ["ООТ-08042462", 2], ["ППБ-АС", 3]],
    },
    {
        key: '112313',
        name: 'Защитные оболочки для ПЭЛ СУЗ в Цех3',
        quantity: 88,
        driver: 'Константин Новоселов',
        tags: ['отклонение', 'задержка'],
        mapCenter: [55.705640, 37.589775],
        mapPosition: [55.705640, 37.589775],
        articles: [["ВСНО1", 10], ["ПУЭ-2000", 1], ["ПТЭ-2020", 2], ["ПТБ-2019", 8]],
    },
    {
        key: '112315',
        name: 'Графеновые уплотнители для лунной станции',
        quantity: 76,
        driver: 'Алексей Гейм',
        tags: ['связь утеряна'],
        mapCenter: [55.698100, 37.615176],
        mapPosition: [55.698100, 37.615176],
        articles: [["ГУ-01", 1000], ["ГУ-33", 1500]]
    },
];