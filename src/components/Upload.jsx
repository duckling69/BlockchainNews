import React from 'react'

const Upload = () => {
  return (
    <div>
      <label
        htmlFor="file"
        className="w-[300px] h-[200px] rounded-xl border border-dotted border-blue-400 cursor-pointer flex flex-col justify-center items-center p-5 text-blue-500 text-sm font-semibold"
      >
        <input type="file" name="file" id="file" className="hidden" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
        </svg>
        <p>Select your files</p>
      </label>
    </div>
  )
}

export default Upload
