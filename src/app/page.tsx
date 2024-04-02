import ClientForm from "@/components/ClientForm";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <section className="bg-radial-gradient w-full min-h-screen px-2 py-12">
      <div className="sm:container space-y-10">
        <Heading
          heading="Let us Create A website for you"
          description="We can help you grow your business"
          center
        />
        <ClientForm />
      </div>
    </section>
  );
}
