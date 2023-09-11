import Link from 'next/link'

export default function PageLogin() {
  return(
    <div>
        <div className='bg-[#fb670a] flex flex-row justify-end'>
            <ul className=' mr-32 mt-4 list-none flex flex-row justify-around w-64 '>
                <li>
                    <Link id='log' className='hover:border-b-2 border-[#ffff] hover:opacity-30' href='./login'>Login</Link>
                </li>
                <li className='hover:border-b-2 border-[#ffff] opacity-30'>
                    Registered
                </li>
            </ul>
        </div>
    </div>
  )
}