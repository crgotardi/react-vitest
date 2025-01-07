import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet'
import '@testing-library/jest-dom/vitest'

describe('Greet', () => {
    it('should render hello with tne name when the name is provided', () => {
        render(<Greet name="Cris" />)

        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/Hello Cris/i)
    })

    it('should render a button when the name is not provided', () => {
        render(<Greet />)

        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/Login/i)
    })
})