import { useState } from 'react'
import { RemoveUser } from './RemoveUser'
import { UpdateUser } from './UpdateUser'
import type { User } from '../data/users.ts'

type UserCardProps = User & {
  onRemove: () => void
}

export const UserCard = ({ name, role, verified, onRemove }: UserCardProps) => {
  // manage the user info here at the card level so that the update is reflected in the card title
  const [displayName, setDisplayName] = useState(name);
  const [displayRole, setDisplayRole] = useState(role);
  const [displayVerified, setDisplayVerified] = useState(verified);

  return (
    <div className="user-card h-full p-4 rounded-sm border-white border text-left min-w-full relative">
      <RemoveUser onRemove={onRemove} />
      <h6 className="mb-2">{displayRole || 'Jabroni'}</h6>
      <h4 className="mb-2">{displayName} {displayVerified && <span>✓</span>}</h4>
      <UpdateUser
        userName={displayName}
        setDisplayName={setDisplayName}
        userRole={displayRole}
        setDisplayRole={setDisplayRole}
        userVerified={displayVerified}
        setUserVerified={setDisplayVerified} />
    </div>
  )
}