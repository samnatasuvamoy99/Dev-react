import { createSlice} from "@reduxjs/toolkit";

const initialState ={
       todos:[{
             id:1,
             text:"hello world",
             

       }]
}

export const todoSlice =createSlice({
         name:"todo",   // this the slice name 
         initialState,
         //store
         reducers:{
              addTodo:(state ,action) =>{ 
                    const todo ={
                       id:Date.now(),
                       text:action.payload,
                       
                    }
                    state.todos.push(todo)
              },
              removeTodo: ( state , action) =>{
                 state.todos =state.todos.filter((todo) => todo.id !== action.payload)
                }, 
                
                updatetodo: (state , action) =>{
                      const {id , text} =action.payload
                      const existingtodo =state.todos.find((todo) => todo.id === id)
                      if(existingtodo){
                            existingtodo.text =text
                      }
                }
         }
})

export const {addTodo ,removeTodo ,updatetodo} =todoSlice.actions // yo to export kerna hogay or jo jo reducer me props he o bhi export kerna hoga

export default todoSlice.reducer  //reducer    ko bhi export kerna hoga 