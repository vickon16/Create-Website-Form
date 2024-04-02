import { z } from "zod";


export const clientFormSchema = z.object({
  fullName: z.string().min(1),
  companyName: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.string().optional(),
  methodOfContact: z.union([
    z.literal("Email"),
    z.literal("Phone"),
  ]),

  projectName: z.string().min(1),
  projectDescription: z.string().min(1),
  projectBudget: z.boolean(),
  projectBudgetDetails: z.string().min(1).optional(),
  projectStartDate: z.date(),
  projectEndDate: z.date(),

  projectAchievement: z.string().min(1),
  projectTargetAudience: z.string().optional(),
  projectExamples: z.string().optional(),
  additionalInformation: z.string().optional(),
});

export type TClientFormSchema = z.infer<typeof clientFormSchema>;