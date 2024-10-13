import {View} from "react-native";
import {useEffect, useRef} from "react";

const useRefStoreMutable = () => {
    const timerRef = useRef(null);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            console.log('Timer running');
        }, 1000);

        return () => {
            clearInterval(timerRef.current);
        };
    }, []);

    return null;
};

export default useRefStoreMutable;
