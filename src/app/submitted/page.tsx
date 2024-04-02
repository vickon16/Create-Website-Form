import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MailCheck } from "lucide-react";

const SubmittedPage = () => {
  return (
    <section className="w-full h-screen flex justify-center px-4 py-16 bg-radial-gradient">
      <Card className="drop-shadow-lg shadow-lg shadow-border/70 bg-transparent self-start">
        <CardHeader className="flex flex-col items-center text-center gap-y-4">
          <MailCheck size={45} className="text-emerald-500" />

          <div className="space-y-1">
            <h2 className="text-clampBase text-emerald-500 font-semibold">
              Request Submitted Successfully
            </h2>
            <p className="text-sm">
              We would get back to you as soon as possible
            </p>
          </div>
        </CardHeader>

        <CardContent></CardContent>
      </Card>
    </section>
  );
};

export default SubmittedPage;
