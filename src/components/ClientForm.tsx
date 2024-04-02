"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

import { TClientFormSchema, clientFormSchema } from "@/lib/zodSchema";
import ClientPersonalDetailsForm from "@/components/ClientPersonalDetailsForm";
import ClientWebsiteDetailsForm from "@/components/ClientWebsiteDetailsForm";
import { Form } from "@/components/ui/form";
import { useRouter } from "next/navigation";

const ClientForm = () => {
  const form = useForm<TClientFormSchema>({
    resolver: zodResolver(clientFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      methodOfContact: "Phone",

      projectName: "",
      projectDescription: "",
      projectBudget: false,
      projectBudgetDetails : undefined,
      projectStartDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
      projectEndDate: new Date(new Date().getTime() + 28 * 24 * 60 * 60 * 1000),
      projectAchievement: "",
      projectTargetAudience: undefined,
      projectExamples: undefined,
      additionalInformation: undefined,
    },
  });

  const router = useRouter();

  const isLoading = form.formState.isSubmitting;

  console.log(form.formState.errors)

  async function onSubmit(values: TClientFormSchema) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.push("/submitted");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex justify-between gap-6 md:flex-row flex-col">
          {/* Client Personal Details */}
          <ClientPersonalDetailsForm
            form={form}
            className="max-w-[500px] pb-10 self-start"
          />

          {/* Client Website Form */}
          <ClientWebsiteDetailsForm form={form} className="max-w-[700px]" />
        </div>

        <div className="flex items-center justify-center sm:max-w-[300px] sm:ml-auto mt-16">
          <Button type="submit" isLoading={isLoading} className="sm:w-full" size="lg">
            Submit Information
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ClientForm;
