export type Role = 'user' | 'admin'

export type User = {
  uid: string
  nickname: Nullable<string>
  role: Nullable<Role>
}

export type UserInfo = {
  nickname: string
  role: Role
  avatar: string
  name: string
  balance: number
  phone: string
}
