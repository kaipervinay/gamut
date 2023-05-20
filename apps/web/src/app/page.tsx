import { UserButton, auth } from "@clerk/nextjs/app-beta";
import { HeroSection } from "@components/hero";

export default async function IndexPage() {
  const { user } = auth();
  return (
    <div className="container m-10 flex justify-between">
      <div className="flex w-fit">
        <h1>Hello {user?.username ?? "world"}!</h1>
        <HeroSection />
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
