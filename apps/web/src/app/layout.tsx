import React from "react";

import "@gamut/ui/styles.css";

import "./global.css";
import { TrpcProvider } from "@/providers/trpc-provider";
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

      <ClerkProvider>
        <TrpcProvider>
          <body>{children}</body>
        </TrpcProvider>
      </ClerkProvider>
    </html>
  );
}
