import { useState } from 'react'
import type { User } from '../data/users.ts'
type AddUserProps = {
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

export const AddUser = ({ users, setUsers }: AddUserProps) => {
  const [showNewUserForm, setShowNewUserForm] = useState(false)

  console.log('users:', users);
  return (
    <>
      <button
        className="add-user btn mt-4"
        type="button"
        onClick={() => setShowNewUserForm(!showNewUserForm)}
      >
        {showNewUserForm ? 'Cancel' : 'Add User'}
      </button>

      {showNewUserForm && (
        <form
          className="flex gap-2 flex-wrap flex-col text-xs w-[200px] items-start mt-4 border border-white rounded-sm p-4"
          onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const name = formData.get('name') as User['name']
            const role = formData.get('role') as User['role']
            const verified = formData.has('verified') as User['verified']

            if (!name) return

            const newUser: User = {
              name,
              role,
              verified
            }

            setUsers([...users, newUser])
            setShowNewUserForm(false)
            e.currentTarget.reset()
          }}
        >
          {/* name */}
          <label htmlFor="name" className="text-gray-500">Name:</label>
          <input type="text" id="name" name="name" placeholder="Name" className="mt-1 p-2 border border-white rounded-sm w-full" />
          {/* role */}
          <label htmlFor="role" className="text-gray-500">Role:</label>
          <select id="role" name="role" className="mt-1 p-2 border border-white rounded-sm w-full">
            <option value="">Select role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          {/* verified */}
          <label htmlFor="verification" className="text-gray-500">Verified:</label>
          <input type="checkbox" id="verified" name="verified" />
          {/* submit */}
          <button type="submit" className="block mt-2 border rounded-sm border-white p-2 w-ful">
            Add User +
          </button>
        </form>
      )}
    </>
  )
}