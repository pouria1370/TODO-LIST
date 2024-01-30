import RevertTimer from '@/components/atoms/in progress/timer'
import { Task } from '@/store/todoZustandCreate'
import {screen, render, fireEvent} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import { describe } from 'node:test'

const sampleTask:Task ={name:"this is demo",id:"asdas"}
const falsey =false;
const truely = true;  
describe(('RevertTimer'), () => {
    describe(('Render(RevertTimer--ATOM)'),() => {
        it('should exist Timer',() => {
            render(<RevertTimer isGoingTobeFired={truely} Task={sampleTask}/>) //Arrange
            const myElm = screen.getByRole('timerWrapepr') //Act
            expect(myElm).toBeInDocument //Assert
        })
        it('should be equal the text in record',() => {
            render(<RevertTimer isGoingTobeFired={truely} Task={sampleTask}/>) //Arrange
            const myElm = screen.getByRole('timerWrapepr') //Act            
            expect(myElm).not.toBeInDocument //Assert

        })
    })
    describe(('Behavior(RevertTimer--ATOM)'), () => {
        it('should timer be fired after clicking',async() => {
            render(<RevertTimer isGoingTobeFired={truely} Task={sampleTask}/>) //Arrange
            const myElm = screen.getByRole('timerExecuter') //Act
            const myElm2 = screen.getByRole('timerWrapepr') //Act            
            await userEvent.click(myElm)
            expect(myElm2).not.toBeInTheDocument //Assert
        })
    })
})

