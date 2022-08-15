import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { Book } from './model/Book';


@Injectable ()

export class BooksService{
    private url = 'localhost'; //API forma indevida - jogar valor em url separada


    httpOptions = {
        Headers: new HttpHeaders ({'content-type': 'aplication/json'})
    }
    constructor(private http:HttpClient){}

    getBook (){
        
        return this.http.get(this.url);
    }
}