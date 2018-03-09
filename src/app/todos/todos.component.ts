import { Component, OnInit } from '@angular/core';
import { TodosService } from '../providers/todos.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos : Todo[];
  
  //los servicios se inyectan aquí
  constructor(public todosServices: TodosService) { 
    console.log('TodosComponent Constructor');
    this.todos = [];
  }

  //las llamadas a los servicios se hacen aquí
  ngOnInit() {
    console.log('TodosComponent ngOnInit');
    this.todosServices.getTodos().subscribe(
      resultado=>{
        console.debug('petición correcta %o', resultado);
        this.mapeo(resultado);
      },
      error=>{
      console.warn('petición incorrecta %o', error);
      }
    )

   
  }//final onInit


  /**
   * mapea los datos en formato json que proviene del servicio rest
   * @param result :any 
   */
  mapeo(result:any){
    let todo: Todo;
    result.forEach(el =>{
      todo = new Todo(el.title);
      todo.id = el.id;
      todo.idUser = el.userIdr;
      todo.completed = el.completed;

      this.todos.push(todo);
    });
  }

  /**
   * borrar item
   */
  borrarItem(index: number) {
    
    for (let todo of this.todos) {  
            if(todo[index] = todo[index].id) {
              this.todos.splice(index);
             
            }

        }  
   
  } 


}
