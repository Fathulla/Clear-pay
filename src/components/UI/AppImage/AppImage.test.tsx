// @ts-nocheck

import { AppImage } from "./AppImage";
import { render, screen } from "@testing-library/react";

describe('Testing component for img', () => {
    const renderAppImage = (src, altSrc) => render (<AppImage imgSrc={src} imgAlt={altSrc}/>)

    test('Testing component is it view' , () => {
        renderAppImage('test.png', 'test-img')

        const imgElement = screen.getByAltText('test-img')
        
        expect (imgElement).toBeInTheDocument()
    })

    test('component views with right url of image' , () => {
        renderAppImage('test.png', 'test-img')

        const imgElement = screen.getByAltText('test-img')
        
        expect (imgElement).toHaveAttribute('src', './img/test.png')
    })
})