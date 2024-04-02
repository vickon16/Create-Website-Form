import { TClientFormSchema } from "@/lib/zodSchema";
import { UseFormReturn } from "react-hook-form";
import CustomForm from "./CustomForm";
import { Card, CardContent, CardHeader } from "./ui/card";
import { cn } from "@/lib/utils";

type Props = {
  form: UseFormReturn<TClientFormSchema>;
  className?: string;
};

const ClientWebsiteDetailsForm = ({ form, className }: Props) => {
  const isLoading = form.formState.isSubmitting;

  return (
    <Card
      className={cn(
        "drop-shadow-lg shadow-lg shadow-border/70 border bg-transparent w-full rounded-md space-y-6",
        className
      )}
    >
      <CardHeader className="text-center w-full">
        <h2 className="text-clampMd text-white font-semibold">
          Website Details
        </h2>
        <p className="text-muted-foreground max-w-prose mx-auto text-sm">
          Tell us how you want your website done for you.
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex-1">
          <CustomForm
            form={form}
            type="text"
            name="projectName"
            formLabel="Project Name"
            placeholder="Enter your project name"
            disabled={isLoading}
            isRequired
          />
        </div>
        <div className="flex-1">
          <CustomForm
            form={form}
            type="textarea"
            name="projectDescription"
            formLabel="Project Description"
            placeholder="Enter your project description"
            formDescription="Describe your project in a few sentence"
            disabled={isLoading}
            isRequired
          />
        </div>
        <div className="flex-1">
          <CustomForm
            form={form}
            type="checkbox"
            name="projectBudget"
            formLabel="Do you have a project budget?"
            disabled={isLoading}
          />
        </div>
        {form.watch("projectBudget") && (
          <div className="flex-1">
            <CustomForm
              form={form}
              type="number"
              name="projectBudgetDetails"
              formLabel="Your Budget"
              placeholder="Enter your budget"
              disabled={isLoading}
            />
          </div>
        )}

        <div className="flex items-center justify-between flex-wrap gap-3">
          <CustomForm
            form={form}
            type="date"
            name="projectStartDate"
            formLabel="Start Date"
            disabled={isLoading}
            isRequired
          />
          <CustomForm
            form={form}
            type="date"
            name="projectEndDate"
            formLabel="End Date"
            disabled={isLoading}
            isRequired
          />
        </div>

        <div className="flex-1">
          <CustomForm
            form={form}
            type="textarea"
            name="projectAchievement"
            formLabel="Project Achievement"
            placeholder="Enter your project achievement"
            formDescription="Think about what success looks like for you."
            disabled={isLoading}
            isRequired
          />
        </div>
        <div className="flex-1">
          <CustomForm
            form={form}
            type="text"
            name="projectTargetAudience"
            formLabel="Target Audience"
            placeholder="Enter your target Audience"
            formDescription="Tell us about your audience or customers."
            disabled={isLoading}
          />
        </div>
        <div className="flex-1">
          <CustomForm
            form={form}
            type="text"
            name="projectExamples"
            formLabel="An Example Project"
            placeholder="Enter URL"
            formDescription="Are there any example projects or websites that you like?."
            disabled={isLoading}
          />
        </div>
        <div className="flex-1">
          <CustomForm
            form={form}
            type="textarea"
            name="additionalInformation"
            formLabel="Additional Information"
            placeholder="Enter here if any"
            disabled={isLoading}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientWebsiteDetailsForm;
