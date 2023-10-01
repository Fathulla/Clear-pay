// @ts-nocheck
import { AppLink } from "./AppLink";
import { render, screen } from "@testing-library/react";

describe("Tesing component AppLink", () => {
    const renderAppLink = (linkLabel, hasIcon) => render(<AppLink linkLabel={linkLabel} hasIcon={hasIcon}/>)

    test('AppLink renders with correct name', () => {
        renderAppLink('test')

        const appLinkElement = screen.getByText('test')

        expect(appLinkElement).toBeInTheDocument()
    })

    test('AppLink views with arrow icons', () => {
        renderAppLink('test', true)
        const appLinkElement = screen.getByText('test')
        const linkElementIcon = screen.getByTestId('arrow-icon')

        expect(appLinkElement).toBeInTheDocument()
        expect(linkElementIcon).toBeInTheDocument()
    })
})