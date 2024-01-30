import { useTodoZustand } from "@/store/todoZustandCreate";
import { AiFillCheckSquare } from "@react-icons/all-files/ai/AiFillCheckSquare";

interface DoneTask {
    handler: (item: any) => void,
    text: String,
    id: any
}


export default function DoneReecord({ text, id, handler }: DoneTask) {
    const allDoneTasks = useTodoZustand(state => state.doneTasks)
    const setTaskInFlow = useTodoZustand(state => state.setTaskInFlow)
    const setIsGoingToBeFired = useTodoZustand(state => state.setIsGoingToBeFired)
    const isGoingToBeFired = useTodoZustand(state => state.isGoingToBeFired)

    const inDoneHandler = () => {
        if (!isGoingToBeFired) {
            let inProgressTask = allDoneTasks.find(i => i.name === text)
            handler(inProgressTask)
            setTaskInFlow(null)
            setIsGoingToBeFired(false)
        }
    }
    return (
        <div id={id} className="flex flex-row gap-6 w-full" onClick={inDoneHandler}>
            <AiFillCheckSquare />
            <div role="doneTask" className="relative font-vazir-adad text-gray text-opacity-70 text-sm">
                {text}
                <div className="h-[1px] w-full -top-[0.5rem] bg-dark relative"></div>
            </div>
        </div>)

}