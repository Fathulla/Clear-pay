//@ts-nocheck
export default function Stack() {
    const items = []

    return{
        pick: () => items[0],
        push: (item) => items.push(item),
        pop: () => items.pop(),
        length: () => items.length,
    }
}
