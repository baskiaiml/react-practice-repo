import { createContext } from "react";

const UserInfoContext = createContext({
    usrename: "Baskaran",
    isAdmin: "false"
});

export default UserInfoContext;