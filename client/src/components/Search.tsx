import React from 'react'

type Props = {}

const Search = (props: Props) => {
  return (
    <div className="border-b-2 border-b-gray-600 border-solid">
      <div className="p-3">
        <input type="text" className="bg-transparent border-none text-white outline-none" placeholder="Find user"/>
      </div>
      <div className="p-3 flex items-center gap-3 text-white cursor-pointer hover:bg-[#2f2d52] ">
        <img src="" alt="" className="w-12 h-12 rounded-[50%] object-cover"/>
        <div>
          <span className="text-lg font-medium ">Nidhish</span>
        </div>
      </div>
    </div>
  )
}

export default Search