import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

export default function AppLayout({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cookies] = useCookies(["access_token"]);
  const router = useRouter();

  //check if user access token is available, if not redirects to /login ; skips /register page
  useEffect(() => {
    if (!cookies.access_token && router.pathname !== "/register") {
      router.push("/login");
    } else {
      setLoggedIn(true);
    }
  }, [cookies.access_token, router.pathname]);

  return loggedIn ? <>{children}</> : null;
}
