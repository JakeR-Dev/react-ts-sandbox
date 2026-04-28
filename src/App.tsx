import { useEffect, useState } from 'react'
import { PreTitle } from './components/PreTitle.tsx'
import { Headline } from './components/Headline'
import { UserCard } from './components/UserCard'
import { ClearStorage } from './components/ClearStorage'
import { ReloadWindow } from './components/ReloadWindow'
import { AddUser } from './components/AddUser'
import { users as defaultUsers, type User } from './data/users.ts'
import { ColTweakers } from './components/ColTweakers.tsx'
import './App.css'

function App() {
  const [beenHere, setBeenHere] = useState(localStorage.getItem('beenHere') === 'true');
  const [desktopCols, setDesktopCols] = useState(3);

  // get stored users from local storage or default to users from users.ts
  const storedUsers = () => {
    if (localStorage.getItem('users')) {
      return localStorage.getItem('users')
    }
    return defaultUsers
  }

  // remove the user
  const removeUser = (indexToRemove: number) => {
    setUsers((prevUsers) => prevUsers.filter((_, index) => index !== indexToRemove))
  }

  // set users state
  const [users, setUsers] = useState(() => {
    try {
      const parsedUsers = JSON.parse(storedUsers() as string)
      return Array.isArray(parsedUsers) && parsedUsers.length > 0 ? (parsedUsers as User[]) : defaultUsers
    } catch {
      return defaultUsers
    }
  })
  

  // load the saved users on mount and set beenHere flag in localstorage
  useEffect(() => {
    // get stored value of 'beenHere' from localstorage
    if (localStorage.getItem('beenHere') !== 'true') {
      localStorage.setItem('beenHere', 'true')
      setBeenHere(true)
    }
    // if 'users' isnt in localstorage, set it with the default users from users.ts
    if (localStorage.getItem('users') !== 'true') {
      localStorage.setItem('users', JSON.stringify(users))
    } else {
      // if 'users' is in localstorage, update users state with the stored value
      try {
        const parsedUsers = JSON.parse(localStorage.getItem('users') as string)
        if (Array.isArray(parsedUsers)) {
          setUsers(parsedUsers as User[])
        }
      } catch {
        setUsers(users)
      }
    }
  }, [])

  // whenever users is updated, save the new users array to localstorage
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  return (
    <>
      {beenHere ? (
        <ClearStorage
          setBeenHere={setBeenHere}
          setUsers={setUsers}
        />
      ) : (
        <ReloadWindow />
      )}
      <section className="floater mx-auto max-w-4xl p-4 box-border">
        <PreTitle />
        <Headline beenHere={beenHere} />
        <div className={`users grid w-full gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-${desktopCols}`}>
          {users.length > 0 ? (
            users.map((user, index) => (
              <UserCard
                key={user.name}
                name={user.name}
                role={user.role}
                verified={user.verified}
                onRemove={() => removeUser(index)}
              />
            ))
          ) : (
            <p className="col-span-full text-center">No users found</p>
          )}
        </div>
        <AddUser
          users={users}
          setUsers={setUsers}
        />
        <ColTweakers
          setDesktopCols={setDesktopCols}
          desktopCols={desktopCols}
        />
      </section>
    </>
  )
}

export default App
