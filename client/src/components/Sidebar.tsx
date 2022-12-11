import React from 'react'
import Chats from './Chats'
import Header from './Header'
import Search from './Search'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className="flex-1 relative bg-[#3e3c61]">
      <Header></Header>
      <Search></Search>
      <Chats></Chats>
    </div>
  )
}

export default Sidebar