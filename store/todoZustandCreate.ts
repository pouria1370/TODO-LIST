import { create } from "zustand";
export interface Task{
    name:String,
    id:string
}
interface ToDoState {
  doneTasks: Task[],
  inProgressTasks: Task[],
  taskInFlow: Task | null,
  isGoingToBeFired : boolean,
  setTaskInProgress: (task:Task) => void,
  setTaskInDone: (task:Task) => void,
  setTaskInFlow: (task:Task | null) => void,
  setTasksInProgress: (task:Task[]) => void,
  setTasksInDone: (task:Task[]) => void,
  setRevertTaskInProgress: (task:Task | null) => void,
  setIsGoingToBeFired : (flag:boolean) => void,
  setDeleteInProgressTask : (Task:Task) => void,

  }

  const getDoneTasksFromLocalStorage = () => {
    const doneTasks = JSON.parse(localStorage.getItem('Done')) || [];

    return doneTasks
  };
  const getInProgressTasksFromLocalStorage = () => {
    const inProgressTasks = JSON.parse(localStorage.getItem('InProgress')) || [];

    return inProgressTasks
  };


export const useTodoZustand = create<ToDoState>()((set) =>({
  doneTasks: getDoneTasksFromLocalStorage(),
  inProgressTasks: getInProgressTasksFromLocalStorage(),
  taskInFlow:null,
  isGoingToBeFired:false,
  setTaskInProgress: (Task) => set((state) => ({ inProgressTasks: state.inProgressTasks.concat(Task)})),
  setTaskInDone: (Task) => set((state) => ({ doneTasks: state.doneTasks.concat(Task), inProgressTasks:state.inProgressTasks.filter(item => item.id !== Task.id )})),
  setTasksInProgress: (Tasks) => set((state) => ({ inProgressTasks: state.inProgressTasks.concat(Tasks)})),
  setTasksInDone: (Tasks) => set((state) => ({ doneTasks: state.doneTasks.concat(Tasks), 
    inProgressTasks:state.inProgressTasks.filter(item => !Tasks.some(itemTask => itemTask.id === item.id) )})),
  setRevertTaskInProgress: (Task) => set((state) => ({ inProgressTasks: state.inProgressTasks.concat(Task), doneTasks:state.doneTasks.filter(item => item.id !== Task.id )})),
  setTaskInFlow : (Task) => set(() => ({taskInFlow:Task})),
  setIsGoingToBeFired : (flag) => set(() => ({isGoingToBeFired:flag})),
  setDeleteInProgressTask : (Task) => set((state) => ({inProgressTasks:state.inProgressTasks.filter((itemTask) => itemTask.id !== Task.id)}))
 
}))

