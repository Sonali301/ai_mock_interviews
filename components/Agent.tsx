// "use client";

import Image from "next/image";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
// import { vapi } from "@/lib/vapi.sdk";
// import { interviewer } from "@/constants";
// import { createFeedback } from "@/lib/actions/general.action";






enum callStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

// interface SavedMessage {
//   role: "user" | "system" | "assistant";
//   content: string;
// }



const Agent = ({userName}: AgentProps ) => {

    const isSpeaking = true;

  return (

    <>
         <div className="call-view">
        {/* AI Interviewer Card */}
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="vapi"
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak" />}
            </div>
             <h3>AI Interviewer</h3>
            </div>

             {/* User Profile Card */}
        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="profile-image"
              width={539}
              height={539}
              className="rounded-full object-cover size-[120px]"
            />
            <h3>{userName}</h3>
          </div>
        </div>



            </div>


             <div className="w-full flex justify-center">
        {callStatus != "ACTIVE" ? (
          <button >
            {/* <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                callStatus !== "CONNECTING" && "hidden"
              )}
            /> */}

            <span >
              {callStatus === "INACTIVE" || callStatus === "FINISHED"
                ? "Call"
                : ". . ."}
            </span>
          </button>
        ) : (
          <button className="btn-disconnect" >
            End
          </button>
        )}
      </div>


    </>
   
            
  )
}

export default Agent