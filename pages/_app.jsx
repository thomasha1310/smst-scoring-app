import { SessionProvider } from "next-auth/react";
import "../styles/globals.css"; // optional if you have global styles

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
