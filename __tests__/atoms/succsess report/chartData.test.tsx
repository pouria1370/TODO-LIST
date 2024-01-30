import ChartData from '@/components/atoms/success report/chartData'
import { Task } from '@/store/todoZustandCreate'
import {screen, render, fireEvent} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import { describe } from 'node:test'

describe(('ChartData'), () => {
    describe(('Render(ChartData--ATOM)'),() => {
        it('should exist ',() => {
            render(<ChartData allPercentage={20} successPercentage={12}/>) //Arrange
            const myElm = screen.getByRole('label') //Act
            expect(myElm).toBeInDocument //Assert
        })
        it('should exist 12 and 20',() => {
            render(<ChartData allPercentage={20} successPercentage={12}/>) //Arrange
            const myElm = screen.getByRole('label') //Act            
            expect(myElm).toContain(12) //Assert

        })
    })

})

