<template >

    <li>{{this.todo | capitalize}} <button v-on:click="()=>{doneTask()}">Done</button><input 
    placeholder="Modifier le nom" v-model="name" v-on:blur="()=> {modifyName()}"></li>

</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import Todo  from '../Todo';

  @Component({
  components: {
   
  },
  directives:{
    
  },
  filters: {
    capitalize: function (value: Todo) {
      if (!value) return ''
      else{
        if(value.getDone()){
          return value.getName() + " (fini)"
        }
        else{
          return value.getName() + " (en cours)"
        }
      }
   
    }
  }
})
export default class Todos extends Vue {
    @Prop({ default: 'todos Component' })  todo: Todo
    @Prop({ default: 'todos Component' })   unfinished: number

    name= ''

    doneTask(){
      if(!this.todo.getDone()){
        this.todo.setDone(true);
        const myUnfinished = this.unfinished - 1
        this.$emit("update-unfinished", myUnfinished);
      }
       
    }
    modifyName(){
      this.todo.setName(this.name)
    }
  
  }


</script>

