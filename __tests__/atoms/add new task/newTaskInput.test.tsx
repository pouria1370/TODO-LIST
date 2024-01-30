import {screen, render, fireEvent} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import NewTaskInput from '@/components/atoms/add new task/newTaskInput'
import { describe } from 'node:test'
const setTaskInProgress = jest.fn()
describe(('New Task Input'), () => {
    describe(('Render(newTask--ATOM)'),() => {
        it('should have Buton',() => {
            render(<NewTaskInput/>) //Arrange
            const myElm = screen.getByRole('button') //Act
            expect(myElm).toBeInDocument //Assert
        })
        it('should have input',() => {
            render(<NewTaskInput/>) //Arrange
            const myElm = screen.getByRole('textbox') //Act
            expect(myElm).toBeInDocument //Assert
        })
        it('should have header',() => {
            render(<NewTaskInput/>) //Arrange
            const myElm = screen.getByRole('form') //Act
            expect(myElm).toBeInTheDocument //Assert
        })
    })
    describe(('Behavior(newTask--ATOM)'), () => {
        it('should have submitted the form',async() => {
            render(<NewTaskInput/>) //Arrange
            const myButton = screen.getByRole('button') //Act
            await userEvent.click(myButton)
            expect(setTaskInProgress).toBeCalled() //Assert
        })
        it('should have clear the inoput after submitting',async() => {
            render(<NewTaskInput/>) //Arrange
            const myButton = screen.getByRole('button') //Act
            const myInput = screen.getByRole('textbox') //Act
            await userEvent.click(myButton)
            expect(myInput).toHaveValue("") //Assert
        })
        it('should have been disabled after submitting',async() => {
            render(<NewTaskInput/>) //Arrangea
            const myButton = screen.getByRole('button') //Act
            const myInput = screen.getByRole('textbox') //Act
            await userEvent.click(myButton)
            expect(myButton).toBeDisabled //Assert
        })
        it('should have not having any value in presence of latina words',async() => {
            render(<NewTaskInput/>) //Arrange
            const myInput = screen.getByRole('textbox') //Act
            fireEvent.change(myInput, { target: { value: 'word' } })
            expect(myInput).toHaveValue("") //Assert
        })
    })
})

