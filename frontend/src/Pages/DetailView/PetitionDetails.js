import React from 'react'

const PetitionDetails = () => {
  return (
    <div >
              <div className=' h-96 bg-cover bg-center flex flex-wrap'
               style={{backgroundImage: "url(https://assets.change.org/photos/3/sr/cy/DUsrcyWQYPCnBzO-800x450-noPad.jpg?1652681528)",}}>
                   <h2 className='font-bold text-3xl pt-3 pl-3 text-black'>Justice For Kashmiri Hindus: Relocation To Jammu</h2>
            </div>
            <div className='p-16 text-[#daded9] font-bold italic text-3xl text-center' >
                <p>Transfer outside Kashmir Division Where we Wont get killed atleast.
We can’t die here in Kashmir day in and day out. Justice delayed is justice denied. We are denied by the state from past 32 years. There’s only one solution transfer outside Kashmir.</p>
            </div>
            <div className="flex items-center space-x-6 mt-4">
            <button className=" w-96 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
             Sign the petition
            </button>
 
            </div>

    </div>
  )
}

export default PetitionDetails
