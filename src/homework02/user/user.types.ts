import { ParamsDictionary } from 'express-serve-static-core'
import { Request } from 'express'

export interface IUser {
  id?: number
  firstName: string
  lastName: string
  email: string
  age: number
  password: string
  isDeleted: boolean
}

interface SuggestUserDTO {
  emailSubstring: string
  limit: string
}

export type GetUserRequest = Request<{id: string}>
export type AddUserRequest = Request<ParamsDictionary, any, { user: IUser }>
export type UpdateUserRequest = Request<ParamsDictionary, any, { user: IUser }>
export type SuggestUserRequest = Request<ParamsDictionary, any, SuggestUserDTO>
export type DeleteUserRequest = Request<{id: string}>
