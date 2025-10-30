import { Container } from 'inversify'
import { BooksRepository } from './classes/BooksRepository'

// 1. Установите inversify к разрабатываемому приложению «библиотека» из модуля NDSE «Настройка окружения 
// и Express.js» и создайте IoC-контейнер в файле container.js.
const container = new Container()

// 2. Добавьте сервис BooksRepository из предыдущего задания в IoC-контейнер.
// Файл classes/BooksRepository.ts
container.bind(BooksRepository).toSelf()

// Задание 3. Использовать IoC-контейнер в обработчиках запросов express.js, чтобы получить BooksRepository
// Файл ./routes/books.ts

export {container}