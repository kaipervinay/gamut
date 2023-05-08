import { auth } from "@clerk/nextjs/app-beta";
import { HeroSection } from "@components/hero";

export default async function IndexPage() {
  const { userId } = auth();
  return (
    <div>
      Hello {userId ?? "world"}!
      <HeroSection />
    </div>
  );
}
