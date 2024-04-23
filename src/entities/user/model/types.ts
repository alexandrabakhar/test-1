export type Role = 'user' | 'admin'

export type User = {
  uid: string
  nickname: Nullable<string>
  role: Nullable<Role>
}
