import Index from '@/components/organisms'
import {screen, render, fireEvent} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import { describe } from 'node:test'

describe(('Index'), () => {
    describe(('Behavior(Index--Organism)'), () => {
        it('In Index must after adding a task we see task in Inprogress not in Done',async() => {
            render(<Index/>) //Arrange
            const myButton = screen.getByRole('button') //Act
            const myInput = screen.getByRole('textbox') //Act
            fireEvent.change(myInput, { target: { value: 'تسک جدید' } })
            await userEvent.click(myButton)
            const myInProgressRecord = screen.getByRole('InProgress') //Act
            expect(myInProgressRecord).toBeInTheDocument
           
        })
    })
})

