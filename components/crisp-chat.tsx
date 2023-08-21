"use client";

import { useEffect } from "react";
import {Crisp} from "crisp-sdk-web";


export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("96e3a071-fbca-430b-9d14-83600a877252");
    },[]);

    return null;
}