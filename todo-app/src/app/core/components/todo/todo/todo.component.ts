import { Component } from '@angular/core';
import { TodoItem } from './todoitems';
import { Model } from '../../../../model/model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  displayAll:boolean=true;
bg: any;
  // name:string;
  // xxx:TodoItem[] | undefined;
  // items: Array<{ id:string,description: string, action: string }>; // Nesne tipini belirtin
  // items:TodoItem[] | undefined;
  constructor(){
    // this.name="Emine Eda"; //default olarak public,private dersem sadece TTodo comp içerisinden erişilebilir
    //private durumda getName() fonks yazılır

    // this.items=["item1","item2","item3"];

    // this.items=[
    //   {id :"1",description:"Kahvaltı",action:"evet"},
    //   {id:"2",description:"Spor",action:"evet"},
    //   {id:"3",description:"Alışveriş",action:"Hayır"}
    // ];

    // this.xxx=[
    //   new TodoItem("1","Akşam Yemeği","Evet"),
    //   new TodoItem("2","Ders Çalışma","Evet"),
    //   new TodoItem("3","Yemek Yapma","Hayır"),

    // ]

    // this.items=[
    //   {id :"1",description:"Kahvaltı",action:"evet"},
    //   {id:"2",description:"Spor",action:"evet"},
    //   {id:"3",description:"Alışveriş",action:"Hayır"}
    // ];
    }
    model =new Model();
    
    addItem(){
      console.log("merhaba");
    }
    getName(){
      return this.model.name;
    }
    getItems(){
      if(this.displayAll){
        return this.model.items;
      }
      return this.model.items.filter(item=>!item.action);
    }
    displayCount(){
      return this.model.items.filter(item=>item.action).length;
    }
  
    
}
