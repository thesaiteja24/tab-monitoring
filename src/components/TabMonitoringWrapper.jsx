import React, { useEffect } from "react";

const TabMonitoringWrapper = ({ children }) => {
  useEffect(() => {
    // Alert user when the mouse moves to the top
    const mouseLocation = (event) => {
      // based on the position of mouse
      if (event.clientY < 10) {
        alert("Do not leave the page!");
      }
    };

    // Disabled right click
    const disableRightClick = (event) => {
      event.preventDefault();
    };

    // Disable copy
    const disableCopy = (event) => {
      event.preventDefault();
    };

    // Close the tab when user switch to other tab
    const handleTabChange = () => {
      if (document.visibilityState === "hidden") {
        alert("You switched the tab. Closing this tab now.");
        window.close();
      }
    };

    document.addEventListener("mousemove", mouseLocation);
    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("copy", disableCopy);
    document.addEventListener("visibilitychange", handleTabChange);

    return () => {
      document.removeEventListener("mousemove", mouseLocation);
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("copy", disableCopy);
      document.removeEventListener("visibilitychange", handleTabChange);
    };
  }, []);

  return <div>{children}</div>;
};

export default TabMonitoringWrapper;
