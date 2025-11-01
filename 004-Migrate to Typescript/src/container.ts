import { Container } from 'inversify'
import { BooksRepository } from './classes/BooksRepository'


const container = new Container()


container.bind(BooksRepository).toSelf()


export {container}