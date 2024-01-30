import { useTodoZustand } from "@/store/todoZustandCreate";
import { BsCircle } from "@react-icons/all-files/bs/BsCircle";
import { BsTrashFill } from "@react-icons/all-files/bs/BsTrashFill";

interface DoneTask {
    text: String,
    id: any,
    handler: (item: any) => void
}


export default function InProgressRecord({ text, id,handler }:DoneTask ) {
const allInrpogressTasks = useTodoZustand(state => state.inProgressTasks)
const setTaskInFlow = useTodoZustand(state => state.setTaskInFlow)
const setIsGoingToBeFired = useTodoZustand(state => state.setIsGoingToBeFired)
const isGoingToBeFired = useTodoZustand(state => state.isGoingToBeFired)
const setDeleteInProgressTask = useTodoZustand(state => state.setDeleteInProgressTask)

const inProgressHandler = () => {
    if(!isGoingToBeFired){
        let inProgressTask = allInrpogressTasks.find(i => i.name === text)
        handler(inProgressTask)
        const currentTask = {name:text,id}
        setIsGoingToBeFired(true)
        setTaskInFlow(currentTask)
    }
}
const deleteHandler = () => {
const currentTask = {name:text,id}
setDeleteInProgressTask(currentTask)
}
    return (
        <div id={id} className="flex flex-row justify-between gap-6 w-full" >
           <div className="flex flex-row justify-between gap-6" onClick={inProgressHandler}>
           <BsCircle />
            <div className="relative font-vazir-adad text-gray text-opacity-70 text-sm">
                {text}
            </div>
           </div>
           <div onClick={() => deleteHandler()}>
            <BsTrashFill />
           </div>
        </div>)

}