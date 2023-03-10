import React from 'react'
import { useEffect, useState } from 'react'

export interface User {
  id: string
  name: string
  email: string
  title: string
  organization: string
  token?: string
}

interface SearchPanelProps {
  param: {
    name: string
    personId: string
  }
  setParam: (param: SearchPanelProps['param']) => void
  users: User[]
}

export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <form>
      <input
        type="text"
        value={param.name}
        onChange={(evt) =>
          setParam({
            ...param,
            name: evt.target.value
          })
        }
      ></input>
      <select
        value={param.personId}
        onChange={(evt) =>
          setParam({
            ...param,
            personId: evt.target.value
          })
        }
      >
        <option value={''}>负责人</option>
        {users.map((user) => {
          return (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          )
        })}
      </select>
    </form>
  )
}
