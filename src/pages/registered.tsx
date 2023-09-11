import PageLogin from "../component/routeLogin"

export default function Registered(){
    return(
        <div>
        <div>
            <PageLogin/>
        </div>
            <div className="flex flex-col justify-center items-center bg-[#fb670a]">    
                <form className="h-screen">
                    <div className="grid gap-6 md:grid-cols-2 mb-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                            <input type="text" id="first_name" className="indent-2 h-7 bg-[#ffa12b] placeholder-[#ffff] rounded-sm" placeholder="John" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                            <input type="text" id="last_name" className="indent-2 h-7 bg-[#ffa12b] placeholder-[#ffff] rounded-sm" placeholder="Doe" required/>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                            <input type="text" id="company" className="indent-2 h-7 bg-[#ffa12b] placeholder-[#ffff] rounded-sm" placeholder="Flowbite" required/>
                        </div>  
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                            <input type="tel" id="phone" className="indent-2 h-7 bg-[#ffa12b] placeholder-[#ffff] rounded-sm" placeholder="DD-#####-####" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" required/>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                        <input type="email" id="email" className="indent-2 h-7 w-64 bg-[#ffa12b] placeholder-[#ffff] rounded-sm" placeholder="john.doe@company.com" required/>
                    </div> 
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="password" className="indent-2 h-7 bg-[#ffa12b] placeholder-[#ffff] rounded-sm" placeholder="•••••••••" required/>
                    </div> 
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input type="password" id="confirm_password" className="indent-2 h-7 bg-[#ffa12b] placeholder-[#ffff] rounded-sm" placeholder="•••••••••" required/>
                    </div> 
                    <div className="flex items-start mb-12">
                        <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border  bg-[#ffa12b] placeholder-[#ffff] rounded-sm" required/>
                        </div>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                    </div>
                    <button type="submit" className="bg-[#ffff] text-[#fb670a] rounded-sm px-8">Registered</button>
                </form>
            </div>
        </div>
    )
}