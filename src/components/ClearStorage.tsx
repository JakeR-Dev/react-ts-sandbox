import type { Dispatch, SetStateAction } from 'react'
import type { User } from '../data/users'

type ClearStorageProps = {
  setBeenHere: Dispatch<SetStateAction<boolean>>
  setUsers: Dispatch<SetStateAction<User[]>>
}

export const ClearStorage = ({ setBeenHere, setUsers }: ClearStorageProps) => {
  const clearLocalStorage = () => {
    // clear 'beenHere' from localstorage and update state to reflect the change
    if (localStorage.getItem('beenHere') === 'true') {
      localStorage.removeItem('beenHere')
      setBeenHere(false)
    }
    // clear 'users' from localstorage and update state to reflect change
    if (localStorage.getItem('users')) {
      console.log('users exists');
      localStorage.removeItem('users')
      setUsers([])
    }
    return
  }

  return (
    <button
      className="clear-storage absolute top-2 right-2 z-999 btn"
      role="button"
      onClick={clearLocalStorage}>
      Clear Local storage
    </button>
  )
}