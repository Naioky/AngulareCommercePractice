import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  booksService : BooksService;
  livros: any;

  constructor( booksService: BooksService) { 
    this.booksService = booksService;
  }

  ngOnInit(): void {


    this.livros = this.booksService.getBook().subscribe((data => {
      this.livros = data;
      console.log (this.livros);
    }))
  }

}
