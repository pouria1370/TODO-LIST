import {screen, render, fireEvent} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import { describe } from 'node:test'
import InProgressRecord  from '@/components/atoms/done/doneRecord'
const setToInProgress = jest.fn()
const text = "hellow"
describe(('inProgressRecord'), () => {
    describe(('Render(inProgressRecord--ATOM)'),() => {
        it('should exist the text in record',() => {
            render(<InProgressRecord handler={setToInProgress}  text={text} id={"ss"}  />) //Arrange
            const myElm = screen.getByText(text) //Act
            expect(myElm).toBeInDocument //Assert
        })
        it('should be equal the text in record',() => {
            render(<InProgressRecord handler={setToInProgress}  text={text} id={"ss"}  />) //Arrange
            const myElm = screen.getByText(text) //Act            
            expect(myElm).toBe(text) //Assert
        })
    })
    describe(('Behavior(inProgressRecord--ATOM)'), () => {
        it('should not be in the box after clicking',async() => {
            render(<InProgressRecord handler={setToInProgress}  text={text} id={"ss"} />) //Arrange
            const myElm = screen.getByText(text) //Act
            await userEvent.click(myElm)
            expect(myElm).not.toBeInTheDocument //Assert
        })
    })
})

