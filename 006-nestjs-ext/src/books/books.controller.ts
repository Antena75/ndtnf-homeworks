import { Body, Controller, Get, Post } from '@nestjs/common'
import { BooksService } from './books.service'
import { Pub } from './interfaces/pub'
import { Book } from './classes/book'

@Controller('books')
export class BooksController {
  constructor(private readonly BooksService: BooksService) {}

  @Get()
  getBooks(): Pub[] {
    return this.BooksService.GetBooks()
  }

  @Post()
  createBook(@Body() Book: Book): void {
    this.BooksService.createBook(Book)
  }
}
