"use client";

import { Button } from "@gamut/ui";

import { Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="container">
      <Button size="sm" rightIcon={<Mail className="h-4 w-4" />}>
        Button
      </Button>
    </div>
  );
};
