import { Counter } from "./Counter";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Testing counter component", () => {
    test('Counter shows first value', () => {
        render(<Counter/>)
        const counterElement = screen.getByText('Счетчик: 0')
        expect(counterElement).toBeInTheDocument()
    })

    test('Counter grows on click on button', () => {
        render(<Counter/>)
        const increaseButton = screen.getByText('Увеличить')
        const counterElement = screen.getByText('Счетчик: 0')

        fireEvent.click(increaseButton)

        expect(counterElement).toHaveTextContent('Счетчик: 1')
    })

    test('10 clicks on button', () => {
        render(<Counter/>)
        const increaseButton = screen.getByText('Увеличить')
        const counterElement = screen.getByText('Счетчик: 0')

        for (let i = 0; i < 10; i++){
            fireEvent.click(increaseButton)
        }

        expect(counterElement).toHaveTextContent('Счетчик: 10')
    })
})