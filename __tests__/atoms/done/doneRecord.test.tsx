import {screen, render, fireEvent} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import { describe } from 'node:test'
import DoneReecord  from '@/components/atoms/done/doneRecord'
const setToDoneTask = jest.fn()
const text = "hellow"
describe(('DoneRecord'), () => {
    describe(('Render(doneRecord--ATOM)'),() => {
        it('should exist the text in record',() => {
            render(<DoneReecord handler={setToDoneTask}  text={text} id={"ss"}  />) //Arrange
            const myElm = screen.getByRole('doneTask').innerText //Act
            expect(myElm).toBeInDocument //Assert
        })
        it('should be equal the text in record',() => {
            render(<DoneReecord handler={setToDoneTask}  text={text} id={"ss"}  />) //Arrange
            const myElm = screen.getByRole('doneTask').innerText //Act            
            expect(myElm).toEqual(text) //Assert
        })
    })
    describe(('Behavior(doneRecord--ATOM)'), () => {
        it('should not be in the box after clicking',async() => {
            render(<DoneReecord handler={setToDoneTask}  text={text} id={"ss"} />) //Arrange
            const myElm = screen.getByText(text) //Act
            await userEvent.click(myElm)
            expect(myElm).not.toBeInTheDocument //Assert
        })
    })
})

