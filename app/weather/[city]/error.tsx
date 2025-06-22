// pages/_error.tsx
"use client";

function ErrorPage({
  statusCode,
  error,
}: {
  statusCode?: number;
  error?: Error;
}) {
  console.log("ErrorPage props:", { statusCode, error });
  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>{statusCode ?? "Error"} • Oops!</h1>
      <div>{error?.message}</div>
    </main>
  );
}

export default ErrorPage;
