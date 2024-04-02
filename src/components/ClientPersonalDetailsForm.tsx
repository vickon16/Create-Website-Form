import { TClientFormSchema } from "@/lib/zodSchema";
import { UseFormReturn } from "react-hook-form";
import CustomForm from "./CustomForm";
import { Card, CardContent, CardHeader } from "./ui/card";
import { cn } from "@/lib/utils";

type Props = {
  form: UseFormReturn<TClientFormSchema>;
  className?: string;
};

const modeOfContact: TClientFormSchema["methodOfContact"][] = [
  "Phone",
  "Email",
];

const ClientPersonalDetailsForm = ({ form, className }: Props) => {
  const isLoading = form.formState.isSubmitting;
  return (
    <Card
      className={cn(
        "drop-shadow-lg shadow-lg shadow-border/70 border bg-transparent w-full rounded-md",
        className
      )}
    >
      <CardHeader className="text-center w-full">
        <h2 className="text-clampMd text-white font-semibold">
          Personal Details
        </h2>
        <p className="text-muted-foreground max-w-prose mx-auto text-sm">
          Tell us about yourself.
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex-1">
          <CustomForm
            form={form}
            type="text"
            name="fullName"
            formLabel="Full Name"
            placeholder="Enter your full name"
            disabled={isLoading}
            isRequired
          />
        </div>
        <div className="flex-1">
          <CustomForm
            form={form}
            type="text"
            name="companyName"
            formLabel="Your Company Name"
            placeholder="Enter your company name"
            disabled={isLoading}
            isRequired
          />
        </div>
        <div className="flex-1">
          <CustomForm
            form={form}
            type="text"
            name="email"
            formLabel="Email Address"
            placeholder="Enter your email address"
            disabled={isLoading}
            isRequired
          />
        </div>
        <div className="flex-1">
          <CustomForm
            form={form}
            type="number"
            name="phoneNumber"
            formLabel="Phone Number"
            placeholder="Enter your phone number"
            disabled={isLoading}
          />
        </div>
        <div className="flex-1">
          <CustomForm
            form={form}
            type="select"
            name="methodOfContact"
            formLabel="Mode of Contact"
            formDescription="How do we contact you?"
            placeholder="Select a mode of contact"
            selectData={modeOfContact.map((mode, index) => ({
              id: index + 1,
              value: mode,
              title: mode,
            }))}
            disabled={isLoading}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientPersonalDetailsForm;
