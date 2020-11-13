<template>
  <div class="home">
    <p v-if="visible">Maintenant vous me voyez {{message}}</p>
    <button v-on:click="foo()">
      ok
    </button>
         <div v-background>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
    <div v-background="color">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
    <br>
    <input placeholder="Nom de la tâche" v-model="placeholder">
    
    <button v-on:click="()=>{createTask()}">Create</button>
    <br>
    <br>
    <br>
    <input placeholder="Nom de la tâche" v-model="placeholderD">
    
    <button v-on:click="()=>{deleteTask()}">Delete</button>
    <br>
    <br>
    
    <br>
    <br>
    <footer v-if="tasksRemains()">
        <span>Il reste {{this.unfinished}} tâche(s) à finir</span>
    </footer>
    
    <ul>
      <todos v-for="todo in tasks" :key="todo.name" v-bind:todo="todo" v-bind:unfinished="unfinished" @update-unfinished="update"></todos>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Background} from '../../directives/background.directive';
import todos from '@/components/Todos.vue'
import Todo  from '../Todo';

@Component({
  components: { todos  },
  directives:{
    Background
  }
})
export default class Home extends Vue {

  tasks: Array<Todo> =[];
  placeholder= '';
  placeholderD= '';
  message= 'test';
  visible = true;
  color = 'green';
  unfinished = 0;
  foo(){
    this.visible = !this.visible;
  }

  tasksRemains(): boolean{
    return(this.unfinished>0)
  }
  modifyPlaceholder(text: string): void{
    this.placeholder = text;
  }
  createTask(){
    const todo = new Todo(this.placeholder, false);
    this.tasks.push(todo);
    this.unfinished++;
  }
  
  deleteTask(){
    for (let _i = 0; _i < this.tasks.length; _i++) {
      if(this.tasks[_i].getName() === this.placeholder){
        this.tasks.splice(_i, 1);
      }
       
    }
  }
  update(number){
        this.unfinished=number;
    }

}
</script>