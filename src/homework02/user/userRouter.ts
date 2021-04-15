import express from 'express'
import API from '../routes'
import { userModel } from '../dbConnect'
import {
  AddUserRequest,
  DeleteUserRequest,
  GetUserRequest,
  SuggestUserRequest,
  UpdateUserRequest,
} from './user.types'

const userRouter = express.Router()

userRouter.get(API.USER.BASE, (req, res) => {
  const users = userModel.getUsers()
  res.status(200).json(users)
})

userRouter.get(API.USER.BY_ID, (req: GetUserRequest, res) => {
  const user = userModel.getUserById(Number(req.params.id))
  res.status(200).json(user)
})

userRouter.post(API.USER.BASE, (req: AddUserRequest, res) => {
  const newUser = req.body.user
  if (newUser) {
    const addedUser = userModel.addUser(newUser)
    res.status(201).json({
      data: {
        user: addedUser
      },
      message: 'New user was successfully created',
    })
  } else {
    res.status(400).json({ error: 'Bad request: new user was not provided' })
  }
})

userRouter.put(API.USER.BASE, (req: UpdateUserRequest, res) => {
  const providedUser = req.body.user
  if (providedUser) {
    const updatedUser = userModel.updateUser(providedUser)
    res.status(200).json({
      data: {
        user: updatedUser
      },
      message: 'User was successfully updated',
    })
  } else {
    res.status(400).json({ error: 'Bad request: updated user was not provided' })
  }
})

userRouter.post(API.USER.SUGGEST, (req: SuggestUserRequest, res) => {
  const { emailSubstring, limit } = req.body
  const suggestedUsers = userModel.getAutoSuggestUsers(emailSubstring, Number(limit))
  res.status(200).json(suggestedUsers)
})

userRouter.delete(API.USER.BY_ID, (req: DeleteUserRequest, res) => {
  const deletedUser = userModel.removeUser(Number(req.params.id))
  res.status(200).json(deletedUser)
})

export default userRouter
