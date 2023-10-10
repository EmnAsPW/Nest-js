import { Controller, Delete, Get, Post, Put } from "@nestjs/common";


@Controller('book')
export class BookController {

    //add book
    @Post("/add")
    addBook() : string{
        return "this will add the book";
    }
    //delete book
    @Delete("/delete")
    deleteBook() : string{
        return "This will delete book";
    }
    //update book
    @Put("/update")
    updateBook(): string{
        return "this will updating the book";
    }

    //get all book
    @Get("/findAll")
    getAllBook(): string{
        return " This will get all the books";
    }
    
}