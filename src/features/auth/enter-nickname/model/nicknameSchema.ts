import { object, string } from 'yup'

export const nicknameSchema = object({
  nickname: string()
    .matches(/^\w+$/, 'error.invalidNickname')
    .required('error.nicknameRequired'),
})
