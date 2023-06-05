import React from "react";

// provide default value inside it
const UserContext = React.createContext({});

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserConsumer, UserProvider };

export default UserContext;