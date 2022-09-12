import { User } from "../users.interface";

export interface UsersStore {
  users: User[],
  paginator: {
    pageIndex:number,
    pageSize: number
  },
  sort: {
    direction: 'asc' | 'desc',
    active: string
  }
}
