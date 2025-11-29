import { Get, Injectable, Post } from '@nestjs/common';
import { Pub } from './interfaces/pub';
import { Book } from './classes/book';

@Injectable()
export class BooksService {

    private readonly books: Pub[] = []

    @Get()
    GetBooks(): Pub[] {
        return this.books
    }

    @Post()
    createBook(Book: Book) {
        this.books.push(Book)
    }
}
