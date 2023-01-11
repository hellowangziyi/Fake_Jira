import { List } from './list'
import { SearchPanel } from './searchPanel'

import React from 'react'
import { useEffect, useState } from 'react'
import qs from 'qs'

import { API } from '../../utils/axios'
import { BASE_URL } from '../../utils/url'
import { cleanObj, useDebounce, useMount } from '../../utils'

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])
  const debounceParam = useDebounce(param, 2000)

  useMount(() => {
    // fetch(`${BASE_URL}/users`).then(async (response) => {
    //   if (response.ok) {
    //     setUsers(await response.json())
    //   }
    // })
    const fetchData = async () => {
      const result = await API.get(
        `http://127.0.0.1:4523/m1/1705926-0-default/users`
      )
      console.log('`${BASE_URL}/users`', result)
      setUsers(result.data.data)
    }

    fetchData()
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get(
        `http://127.0.0.1:4523/m1/1705926-0-default/projects?${qs.stringify(
          cleanObj(debounceParam)
        )}`
      )
      console.log('/projects', result)
      setList(result.data.data)
    }

    fetchData()
  }, [debounceParam])
  return (
    <div>
      <SearchPanel
        users={users}
        param={param}
        setParam={setParam}
      ></SearchPanel>
      <List users={users} list={list}></List>
    </div>
  )
}
