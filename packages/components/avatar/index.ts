import { withInstall } from '../install'
import Avatar from './src/index.vue'

export const FnAvatar = withInstall(Avatar, 'FnAvatar')
FnAvatar.name = 'FnAvatar'
export default FnAvatar
export * from './src/avatar'
export type AvatarInstance = InstanceType<typeof Avatar>
