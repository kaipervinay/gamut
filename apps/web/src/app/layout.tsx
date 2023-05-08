import React from "react";

import "@gamut/ui/style.css";

import { ClerkProvider } from "@clerk/nextjs/app-beta";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js 13 with Clerk</title>
      </head>

      <ClerkProvider
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || ""}
      >
        <body>{children}</body>
      </ClerkProvider>
    </html>
  );
}
