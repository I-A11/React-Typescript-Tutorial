import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = ({ name, messageCount = 0, isLoggedIn }: GreetProps) => {
  return (
    <div className='greet'>
      {isLoggedIn ? (
        <h2>
          Welcome {name}! You have {messageCount} unread message{" "}
        </h2>
      ) : (
        <h2>Welcome guest</h2>
      )}
    </div>
  );
};

export default Greet;
