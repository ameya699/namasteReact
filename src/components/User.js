import React from 'react'

const User = () => {
  return (
    <div className='border border-black p-4 m-4 bg-[#EBDFD7] w-[600px] rounded-[10px] flex justify-between'>
        <img src='https://media.licdn.com/dms/image/v2/D4D35AQG46Vha_Rx0sQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1725790292453?e=1726502400&v=beta&t=tTBuA8SawR2rWeD-zyeeYOrpXoHVZAuccFUgAg1R1N0'
         className='object-cover h-48 self-center rounded-full'/>
        <div className='flex flex-col gap-5 self-center'>
        <h2>Name :Ameya Awatade</h2>
        <h3>Location : Pune</h3>
        <h4>Contact : awatadeameya68@gmail.com</h4>
        </div>
    </div>
  )
}

export default User