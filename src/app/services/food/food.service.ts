import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
getFoodById(id:number): Foods{
return this.getAll().find(food => food.id == id)!;
}


  getAll():Foods[]{
    return[
     {
      id:1,
      name:'Pizza Pepperoni',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['Italy'],
      star:4.5,
      imageUrl:'/assets/food-1.jpg',
      tags:['FastFood','Pizza','Lunch'],
     },
     {
      id:2,
      name:'Meatball',
      cookTime: '20-30',
      price: 20,
      favorite: true,
      origins: ['Persia','middle east', 'China'],
      star:4.5,
      imageUrl: '/assets/food-2.jpg',
      tags:['SlowFood','Lunch'],
     },
     {
      id:3,
      name:'Hamburger',
      cookTime: '10-15',
      price: 5,
      favorite: false,
      origins: ['germany','us'],
      star:3.5,
      imageUrl: '/assets/food-3.jpg',
      tags:['FastFood','Hamburger'],
     },
     {
      id:4,
      name:'Fried Potatoes',
      cookTime: '10-20',
      price: 2,
      favorite: false,
      origins: ['belgium','France'],
      star:4.5,
      imageUrl: '/assets/food-4.jpg',
      tags:['FastFood','Fry'],
     },
     {
      id:5,
      name:'Chicken Soup',
      cookTime: '40-50',
      price: 11,
      favorite: true,
      origins: ['India'],
      star:4.5,
      imageUrl: '/assets/food-5.jpg',
      tags:['SlowFood','Lunch'],
     },
     {
      id:6,
      name:'Veggy Pizza',
      cookTime: '15-30',
      price: 15,
      favorite: true,
      origins: ['Indian'],
      star:4.5,
      imageUrl: '/assets/food-6.jpg',
      tags:['FastFood','Pizza','Lunch'],
     },
     {
      id:7,
      name:'Veg Burger ',
      cookTime: '30-40',
      price: 11,
      favorite: false,
      origins: ['Italy'],
      star:4.5,
      imageUrl: '/assets/food-7.jpg',
      tags:['FastFood','Pizza','Lunch'],
     },
     {
      id:8,
      name:'Spicy Pizza',
      cookTime: '10-50',
      price: 15,
      favorite: false,
      origins: ['Italy'],
      star:4.5,
      imageUrl: '/assets/food-8.jpg',
      tags:['FastFood','Pizza','Lunch'],
     },
    ];
  }
}