import { UserService } from './UserService'
import { IUser } from './types'

export class UserModel {
  db: UserService
  constructor(db: UserService) {
    this.db = db
  }

  getUsers(): IUser[] {
    return this.db.getUsersQuery()
  }

  getUserById(id: number): IUser {
    const users = this.getUsers()
    return users.find(user => user.id === id)
  }

  addUser({
    firstName,
    lastName,
    email,
    age,
    password,
  }: IUser): void {
    this.db.addUserQuery({
      age,
      firstName,
      lastName,
      email,
      password,
      isDeleted: false
    })
  }

  updateUser(updatedUser: IUser): void {
    this.db.updateUserQuery(updatedUser)
  }

  getAutoSuggestUsers(loginSubstring: string, limit: number) {
    const users = this.getUsers()
    return users.filter(
      user => user.email.includes(loginSubstring)
    ).slice(0, limit)
  }

  removeUser(userId: number) {
    this.db.removeUserQuery(userId)
  }
}
