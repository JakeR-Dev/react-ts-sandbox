import type { Dispatch, SetStateAction, SubmitEvent } from 'react'
import type { User } from '../data/users.ts'
import { useState } from 'react'

type UpdateUserProps = {
  userName: string
  setDisplayName: Dispatch<SetStateAction<string>>
  userRole: User['role']
  setDisplayRole: Dispatch<SetStateAction<User['role']>>
  userVerified: User['verified']
  setUserVerified: Dispatch<SetStateAction<User['verified']>>
}

export const UpdateUser = ({ userName, setDisplayName, userRole, setDisplayRole, userVerified, setUserVerified }: UpdateUserProps) => {
  const [showUpdateField, setShowUpdateField] = useState(false)

  const updateUser = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    // update name
    const updatedName = formData.get('userName') as string
    setDisplayName(updatedName)
    // update role
    const updatedRole = formData.get('role')
    if (updatedRole === 'admin' || updatedRole === 'user') {
      setDisplayRole(updatedRole)
    }
    // toggle form display
    setShowUpdateField(false)
  }

  return (
    <>
      <button
        className="update-user btn"
        type="button"
        onClick={() => setShowUpdateField(!showUpdateField)}
      >
        {showUpdateField ? 'Cancel' : 'Update user'}
      </button>

      {showUpdateField && (
        <form
          className="flex gap-2 flex-wrap flex-col text-xs w-[200px] items-start mt-2"
          onSubmit={updateUser}
        >
          {/* name */}
          <label htmlFor="name" className="text-gray-500">Name:</label>
          <input
            id="name"
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="mt-1 p-2 border border-white rounded-sm w-full"
          />
          {/* role */}
          <label htmlFor="role" className="text-gray-500">Role:</label>
          <select
            id="role"
            name="role"
            className="mt-1 p-2 border border-white rounded-sm w-full"
            value={userRole}
            onChange={(e) => {
              const nextRole = e.target.value
              if (nextRole === 'admin' || nextRole === 'user') {
                setDisplayRole(nextRole)
              }
            }}
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          {/* verification */}
          <label htmlFor="verification" className="text-gray-500">Verified:</label>
          <input
            id="verification"
            type="checkbox"
            name="verification"
            className="block text-left"
            checked={userVerified}
            onChange={(e) => setUserVerified(e.target.checked)}
          />
          {/* submit */}
          <button type="submit" className="block mt-2 border rounded-sm border-white p-2 w-full">
            Update ↗
          </button>
        </form>
      )}
    </>
  )
}