export interface User {
    id: string;
    name: string;
    isActive: boolean;
}

export const mapActiveUsers = (users: Array<User>) => {
    return users.filter(user => user.isActive)
}