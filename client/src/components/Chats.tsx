import React from 'react'

type Props = {}

const Chats = (props: Props) => {
  return (
    <div>
        <div className="p-3 flex items-center gap-3 text-white cursor-pointer hover:bg-[#2f2d52] ">
        <img src="" alt="" className="w-12 h-12 rounded-[50%] object-cover"/>
        <div>
          <span className="text-lg font-medium ">Nidhish</span>
          <p className="text-sm text-gray-500">Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats