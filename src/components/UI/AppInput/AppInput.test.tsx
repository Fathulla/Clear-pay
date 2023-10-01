//@ts-nocheck
import { AppInput } from "./AppInput";
import { render, screen } from '@testing-library/react'


describe('Testing AppInput component', () => {
    const renderAppInput = (name) => render(<AppInput name={name}/>)

    test('AppInput renders with correct name', () => {
        renderAppInput('test')

        const appInputElement = screen.getByText('test')

        expect(appInputElement).toBeInTheDocument()
    })
})