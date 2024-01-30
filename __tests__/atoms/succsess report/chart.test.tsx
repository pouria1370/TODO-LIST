import { SuccessReportChart } from '@/components/atoms/success report/chart'
import {screen, render,} from '@testing-library/react'
import { describe } from 'node:test' 
describe(('SuccessReportChart'), () => {
    describe(('Render(SuccessReportChart--ATOM)'),() => {
        it('should exist Timer',() => {
            render(<SuccessReportChart/>) //Arrange
            const myElm = screen.getByRole('region') //Act
            expect(myElm).toBeInDocument //Assert
        })
    })
})

