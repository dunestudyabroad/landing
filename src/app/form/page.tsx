// pages/form.tsx
import Head from "next/head";

export default function FormPage() {
  return (
    <>
      <Head>
        <title>Registration Form – Silicon Beach Program</title>
        <meta name="description" content="Join Silicon Beach Program by submitting this form." />
      </Head>

      <main className="min-h-screen flex items-center justify-center p-4 bg-white">
        <iframe
          src="https://form.jotform.com/251611152020033"
          width="100%"
          height="700"
          style={{ border: "none" }}
          allowFullScreen
        />
      </main>
    </>
  );
}
