import { UserService } from './UserService'
import { IUser } from './user.types'

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
  }: IUser): IUser {
    return this.db.addUserQuery({
      age,
      firstName,
      lastName,
      email,
      password,
      isDeleted: false
    })
  }

  updateUser(updatedUser: IUser): IUser {
    return this.db.updateUserQuery(updatedUser)
  }

  getAutoSuggestUsers(emailSubstring: string, limit: number): IUser[] {
    const users = this.getUsers()
    return users.filter(
      user => user.email.includes(emailSubstring)
    ).slice(0, limit)
  }

  removeUser(id: number): IUser {
    return this.db.removeUserQuery(id)
  }
}
