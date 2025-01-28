import { UserContext } from "@/app/providers/UserContext";
import { useContext } from "react";

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('User Context Error')
    }

    return context;
};