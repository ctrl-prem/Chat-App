import React from "react";

const Title = ({
  title = "Chat App",
  discription = "This is the chat app called bakyati",
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="discription" content={discription} />
    </>
  );
};

export default Title;
