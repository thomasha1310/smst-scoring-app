// pages/index.jsx
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Welcome to SMST Scoring Portal</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "20px auto" }}>
        This platform allows volunteer graders to securely log in with their
        school Google accounts and enter scores for the Sharon Math and Science
        Tournament.
      </p>

      {session ? (
        <div>
          <p>
            Signed in as <strong>{session.user.email}</strong>
          </p>
          <button
            onClick={() => signOut()}
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn("google")}
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Sign In with Google
        </button>
      )}
    </div>
  );
}
