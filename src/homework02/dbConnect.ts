import { UserService } from './UserService'
import { UserModel } from './UserModel'

export const dbConnect = () => {
  const userService = new UserService()
  const userModel = new UserModel(userService)

  console.log(
    userModel.getAutoSuggestUsers('com', 5)
  )

  return { userModel }
}