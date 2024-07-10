"use client"

import { useEffect } from "react";

export default function TawkTo() {
    useEffect(() => {
        var Tawk_API: any =Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/66411ed19a809f19fb30164d/1htn60ou6';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode!.insertBefore(s1,s0);
        })();
    })

    return (<></>);
}