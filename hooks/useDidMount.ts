import { useEffect } from "react";

function useDidMount(callback: () => void): void {
    useEffect(() => {
        if (typeof callback === "function") {
            callback();
        }
    }, []);
}

export { useDidMount };