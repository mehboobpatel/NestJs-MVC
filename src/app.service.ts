import { Injectable } from '@nestjs/common';
import { BookModel } from './book.model';

@Injectable()
export class AppService {

  public books: BookModel[] = [
    {
      title: "Book 1",
      author: "Author 1",
      publish: 2020
    },
    {
      title: "Book 2",
      author: "Author 2",
      publish: 2018
    },
    {
      title: "Book 3",
      author: "Author 3",
      publish: 2015
    },
    {
      title: "Book 4",
      author: "Author 4",
      publish: 2013
    }
  ]


  getAllbooks() : BookModel[]{
    return this.books;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
