import { IoWarningOutline } from "react-icons/io5";

export default function SignUpNotice (){
    return(
        <div className="max-w-md mx-auto">
            <div className="bg-amber-100 text-amber-900 m-3 py-4 rounded-lg h-20">
                <p className="relative h-full flex pl-4 my-auto indent-6">< IoWarningOutline className="absolute text-md left-4 top-[5px]"/> To join this server, you need to fill out this application, and wait to be accepted.</p>
            
            </div>
            <div className="mx-3 flex flex-wrap gap-4">
                <p>Lemmy.world is temporarily disabling open signups and moving to an application-required signup process, due to ongoing issues with malicious users and bot accounts.</p>
                <p className="">We know this is a major step to take, but we believe that it’s the right one for both us and our community right now.</p>
                <p>We’re working on a better long-term technical solution to these bots, but that will take time to create, test, and verify that it doesn’t cause any problems with federation and how our users use our site, and we’d rather make sure we get it right than have a site that’s broken.</p>
                <p>We’re making this change on 28th of August 2023, and don’t have a specific timeline for how long registrations will require an application, but we will post and update once our new anti-abuse measures are in place and working.</p>
                <p className="font-bold">For now, users with a temporary email address will be denied.</p>
                <p>Please confirm below that you’ve read this message.</p>
                <p>Take care, LW Team</p>
            </div>
        </div>
    )
}