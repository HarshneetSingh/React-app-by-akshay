import { useEffect, useState } from "react";

const useIsOnline = () => {
    const [isOnline, setIsOnline] = useState(true)


    useEffect(() => {

        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);
        // to check whether app is online ,there's window listener 
        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)


        return () => {
            // removing window listener to clean up the listeners so that whenever renders again it shouldn't be creating new event listenerremoveEventListener
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }
    }, [])
    return isOnline;
}

export default useIsOnline