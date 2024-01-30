'use server'

import connectMongoDB from "@/database/libs/connect";
import Todo from "@/database/models/todoModels";

export const getTodos = async () => {
    try {
      connectMongoDB();
      const todos = await Todo.find({})
      if (!todos) {
        throw new Error("Error is occured during the connection")
        return todos
      }
    } catch (error) {
      console.log("error while fetching data");
  
    }
  }
  