import React from "react";
import { useSelector } from "react-redux";

const Component = () => {
  const currentPath = useSelector((state) => state.app.path);
  const previousComponent = useSelector((state) => state.app.previousComponent);

  return (
    <div className="block">
      <h1>{currentPath}</h1>
      {previousComponent && <p className="p">превыдущий: {previousComponent}</p>}

      <p className="text">Lorem ipsum dolor sit amet consectetur</p>
    </div>
  );
};

export default Component;