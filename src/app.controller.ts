import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { BookModel } from './book.model';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //you can use double quotes as well as single quote
  getView(@Res() res : Response) {
  return res.render("index", {books : this.appService.getAllbooks()})
  }

}
