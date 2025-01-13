"use client"; // Mark the component as a client component

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true); // Trigger loading when navigation starts
    const handleComplete = () => setLoading(false); // Stop loading when navigation completes

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading ? (
        <div className="loader">
          <div className="spinner"></div>
          <style jsx>{`
            .loader {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100vh;
              background: #ffffff;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 9999;
            }
            .spinner {
              width: 50px;
              height: 50px;
              border: 5px solid rgba(0, 0, 0, 0.1);
              border-top-color: #3498db;
              border-radius: 50%;
              animation: spin 1s linear infinite;
            }
            @keyframes spin {
              to {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
      ) : (
        children
      )}
    </>
  );
}
