"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import RequiredStar from "@/components/RequiredStar";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

interface CustomInputProps {
  form: UseFormReturn<any>;
  name: string;
  formLabel: string;
  isRequired?: boolean;
  formDescription?: string;
  className?: string;
  formItemClassName?: string;
  disabled?: boolean;
}

type ConditionalProps =
  | {
      type: "text";
      placeholder: string;
      selectData?: never;
    }
  | {
      type: "number";
      placeholder: string;
      selectData?: never;
    }
  | {
      type: "textarea";
      placeholder: string;
      selectData?: never;
    }
  | {
      type: "checkbox";
      placeholder?: never;
      selectData?: never;
    }
  | {
      type: "date";
      placeholder?: never;
      selectData?: never;
    }
  | {
      type: "select";
      placeholder: string;
      selectData: any[];
    };

type CustomFormProps = CustomInputProps & ConditionalProps;

const CustomForm = ({
  form,
  name,
  formLabel,
  placeholder,
  isRequired,
  type,
  formDescription,
  className,
  formItemClassName,
  selectData,
  disabled,
}: CustomFormProps) => {
  return (
    <div className={cn("", className)}>
      <FormField
        disabled={disabled}
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className={cn("w-full flex flex-col", formItemClassName)}>
            {type !== "checkbox" && (
              <FormLabel>
                {formLabel} {isRequired && <RequiredStar />}
              </FormLabel>
            )}

            {type === "text" && (
              <FormControl>
                <Input
                  placeholder={placeholder}
                  {...field}
                />
              </FormControl>
            )}

            {type === "number" && (
              <FormControl>
                <Input
                  type="number"
                  inputMode="numeric"
                  placeholder={placeholder}
                  
                  {...field}
                />
              </FormControl>
            )}

            {type === "textarea" && (
              <FormControl>
                <Textarea
                  placeholder={placeholder}
                  rows={4}
                  className="resize-none"
                  {...field}
                />
              </FormControl>
            )}

            {type === "checkbox" && (
              <div className="flex items-center gap-x-3">
                <div className="space-y-1 leading-none">
                  <FormLabel>{formLabel}</FormLabel>
                </div>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </div>
            )}

            {type === "select" && (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  {selectData?.map(({ id, value, title }) => (
                    <SelectItem key={id} value={value}>
                      {title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {type === "date" && (
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    captionLayout="dropdown-buttons"
                    fromYear={1960}
                    toYear={2035}
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            )}

            {formDescription && (
              <FormDescription>{formDescription}</FormDescription>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CustomForm;
