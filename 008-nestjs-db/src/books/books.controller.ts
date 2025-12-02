import { Controller, Param, Body, Get, Post, Put, Delete } from '@nestjs/common'
import { BookDocument } from './schemas/book.schema'
import { BooksService } from './books.service'
import { CreateBookDto } from './interfaces/dto/create-book'
import { UpdateBookDto } from './interfaces/dto/update-book'
import { IParamId } from './interfaces/param-id'
import { HydratedDocument, QueryWithHelpers } from 'mongoose'

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  public getAll(): Promise<BookDocument[]> {
    return this.booksService.getAll()
  }

  @Post()
  public createBook(@Body() body: CreateBookDto): Promise<BookDocument> {
    return this.booksService.create(body)
  }

  @Put(':id')
  public updateBook(
    @Param() { id }: IParamId,
    @Body() body: UpdateBookDto
  ): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
     
    return this.booksService.update(id, body)
  }

  @Delete(':id')
  public deleteBook(
    @Param() { id }: IParamId
  ): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
    
    return this.booksService.delete( id )
  }
}
