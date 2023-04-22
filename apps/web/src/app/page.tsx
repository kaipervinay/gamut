import { HeroSection } from "@/components/hero";
import { User } from "@clerk/nextjs/api";
import { currentUser } from "@clerk/nextjs/app-beta";

export default async function IndexPage() {
  const user: User | null = await currentUser();
  return (
    <div>
      Hello {user?.firstName ?? "world"}!
      <HeroSection />
    </div>
  );
}
