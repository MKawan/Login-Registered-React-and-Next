import { log } from 'console'
import Link from 'next/link'
export default function PageRegistered() {
  return(
    <div>
        <div className='bg-[#fb670a] flex flex-row justify-end'>
            <ul className=' mr-32 mt-4 list-none flex flex-row justify-around w-64 '>
                <li className='hover:border-b-2 border-[#ffff] opacity-30'>
                    Login
                </li>
                <li>
                    <Link className='hover:border-b-2 border-[#ffff] hover:opacity-30' href='./registered'>Registered</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}