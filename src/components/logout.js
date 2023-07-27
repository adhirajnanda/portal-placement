import React, { useEffect } from "react";

function logout() {
  const logoutFn = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    logoutFn();
  }, []);
  return <div>logout</div>;
}

export default logout;
