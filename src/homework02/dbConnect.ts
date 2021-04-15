import { UserModel } from './user/UserModel'
import { UserService } from './user/UserService'

const dbConnect = () => {
  const userService = new UserService()
  const userModel = new UserModel(userService)

  return { userModel }
}

export const { userModel } = dbConnect()
