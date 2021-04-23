import usersMock from './users.mock.json'
import { IUser } from './user.types'

export class UserService {
  users: IUser[]

  constructor() {
    this.users = usersMock
  }

  getUsersQuery(): IUser[] {
    return this.users
  }

  addUserQuery(user: IUser): IUser {
    const newUser = {
      id: this.users[this.users.length - 1].id + 1,
      ...user
    }
    this.users.push(newUser)
    return newUser
  }

  updateUserQuery(user: IUser): IUser {
    const userIndex = this.users.findIndex(currentUser => currentUser.id === user.id)
    return this.users[userIndex] = {
      ...this.users[userIndex],
      ...user
    }
  }

  removeUserQuery(id: number): IUser {
    const userIndex = this.users.findIndex(user => user.id === id)
    return this.users[userIndex] = {
      ...this.users[userIndex],
      isDeleted: true
    }
  }
}
