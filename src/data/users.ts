export type User = {
  name: string
  role?: 'admin' | 'user'
  verified?: boolean
}

export const users: User[] = [
  {
    name: 'Jiminy McGee',
    role: 'admin',
    verified: true,
  },
  {
    name: 'Kaptain Brownstone',
    role: 'user',
    verified: false,
  },
  {
    name: 'Hamilton Log',
    role: 'admin',
  },
  {
    name: 'Joaquin Smith',
    verified: true,
  },
  {
    name: 'Samantha Doe',
    role: 'user',
    verified: false,
  }
]