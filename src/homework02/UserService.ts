import usersMock from './usersMock.json'
import { IUser } from './types'

export class UserService {
  users: IUser[]

  constructor() {
    this.users = usersMock
  }

  getUsersQuery(): IUser[] {
    return this.users
  }

  addUserQuery(user: IUser): void {
    const newUserId = this.users[this.users.length - 1].id + 1
    this.users.push({
      ...user,
      id: newUserId
    })
  }

  updateUserQuery(user: IUser): void {
    const userIndex = this.users.findIndex(user => user.id === user.id)
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...user
    }
  }

  removeUserQuery(id: number): void {
    const userIndex = this.users.findIndex(user => user.id === id)
    this.users[userIndex] = {
      ...this.users[userIndex],
      isDeleted: true
    }
  }
}