import { useState, useEffect } from "react";

// take userID from localStorage token
export const useGetUserID = () => {
  const [userID, setUserID] = useState("");

  useEffect(() => {
    const userID = localStorage.getItem("userID");
    setUserID(userID);
  }, []);

  return userID;
};