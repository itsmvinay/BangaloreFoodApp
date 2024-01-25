
import {useState,useEffect} from 'react';

const offlineOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        addEventListener("online", (event) => {
            setOnlineStatus(true)
        });

        addEventListener("offline", (event) => {
            setOnlineStatus(false)
        });
    })
   
    return onlineStatus;

}

export default offlineOnlineStatus;