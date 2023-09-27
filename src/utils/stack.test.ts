// @ts-nocheck

import Stack from "./stack";

describe('Проверяем свою реализацию стека', () => {
    const myStack = new Stack()

    test('В стек попадает значение', () => {
        myStack.push(900)
        myStack.push(800)

        expect(myStack.length()).toBe(2)
    })

    test('В стеке находится актуальное значение', () => {
        expect(myStack.pick()).toBe(900)
    })

    test('Метод pop удаляет элемент из стека', () =>{
        myStack.pop()

        expect(myStack.length()).toBe(1)
    })
})