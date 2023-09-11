import { IconKey, IconBrandGoogle, IconUser,IconBrandFacebook } from "@tabler/icons-react";
import PageRegistered from "../component/routeRegistered";

export default function Login(){

    return(
        <div>
            <div>
                <PageRegistered/>
            </div>
            <div className="flex flex-col h-screen 
            items-center justify-center
            bg-[#fb670a]"
            >
                <div>
                    <h1>Login:</h1>
                    <div className="flex my-3">
                        <IconUser/><input className="indent-2 h-7 bg-[#ffa12b] placeholder-[#ffff] rounded-sm" type="text" placeholder="User" />
                    </div>
                    <div className="flex">
                        <IconKey/><input type="password" className="indent-2 h-7 bg-[#ffa12b] placeholder-[#ffff] rounded-sm" placeholder="•••••••••" required/>
                    </div>
                    <div className="my-8">
                        <button className="bg-[#ffff] text-[#fb670a] rounded-sm px-8" >Login</button>
                    </div>
                </div> 
                <div className="my-8 justify-around flex">
                    <a className="mr-12 border-2 rounded-full p-1" href="#"><IconBrandGoogle/></a>
                    <a className="border-2 rounded-full p-1" href="#"><IconBrandFacebook/></a>
                </div>  
            </div>
        </div>
    )
}