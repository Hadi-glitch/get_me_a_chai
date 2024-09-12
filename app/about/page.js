import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Users, Zap } from "lucide-react";
import Link from "next/link";

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: ["Project Manager"],
  },
  {
    id: 2,
    name: "Jane Smith",
    role: ["CEO"],
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: ["Lead Developer"],
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="mycontainer px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary-foreground">
                  About GetMeAChai
                </h1>
                <p className="mx-auto max-w-[700px] text-primary-foreground md:text-xl">
                  Empowering creators, one cup of chai at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="mycontainer px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Mission
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white">
                  At GetMeAChai, we believe in the power of community support.
                  Our mission is to connect passionate creators with generous
                  supporters, fostering a culture of appreciation and
                  encouragement through the simple act of buying someone a chai.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="mycontainer px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-850 text-white">
                <CardHeader className="flex flex-col items-center space-y-2">
                  <Coffee className="h-12 w-12 text-white" />
                  <CardTitle className="text-xl">Easy Donations</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Support your favorite creators with just a few clicks, as easy
                  as buying them a cup of chai.
                </CardContent>
              </Card>
              <Card className="bg-gray-850 text-white">
                <CardHeader className="flex flex-col items-center space-y-2">
                  <Users className="h-12 w-12" />
                  <CardTitle className="text-xl">Community Building</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Foster meaningful connections between creators and supporters
                  in a vibrant community.
                </CardContent>
              </Card>
              <Card className="bg-gray-850 text-white">
                <CardHeader className="flex flex-col items-center space-y-2">
                  <Zap className="h-12 w-12" />
                  <CardTitle className="text-xl">Instant Payouts</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Creators receive their funds quickly and securely, allowing
                  them to focus on their passion.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="mycontainer px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Team
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white">
                  Meet the passionate individuals behind GetMeAChai.
                </p>
              </div>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center space-y-2"
                >
                  <img
                    src="avatar.gif"
                    alt={`Team member ${member.name}`}
                    className="rounded-full"
                    width={200}
                    height={200}
                  />
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <div className="text-white flex flex-col items-center">
                    {member.role.map((role, index) => (
                      <p key={index} className="text-sm">
                        {role}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Community Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="mycontainer px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-primary-foreground">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Join Our Community
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether you&apos;re a creator or a supporter, there&apos;s a place for
                  you in the GetMeAChai family.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/login">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
