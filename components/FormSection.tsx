"use client";

import React from "react";
import Section from "./Section";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HeroInterface {
  title?: string;
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  mobile: z.number().min(1, {
    message: "Mobile should be 10 digits",
  }),
  email: z
    .string()
    .min(1, { message: "Please enter a valid email id." })
    .email("This is not a valid email."),
  emirate: z.string(),
  eid: z.string(),
  reciept: z.string(),
});

const FormSection: React.FC<HeroInterface> = ({ title }) => {
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      emirate: 'Dubai'
    },
  });
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  
  return (
    <Section>
      <p className="text-center pb-4 text-2xl">{title}</p>
      <div className="flex flex-col md:flex-row justify-evenly ">
        <div className="flex w-full bg-red-200 text-center justify-center items-center min-h-[400px]">
          Left
        </div>
        <div className="flex w-full bg-purple-300 items-center justify-center min-h-[400px]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 p-6 w-full"
              dir=""
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs mb-0" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Mobile" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emirate"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger className="">
                          <SelectValue placeholder="Emirate" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Abu Dhabi">Abu Dhabi</SelectItem>
                          <SelectItem value="Dubai">Dubai</SelectItem>
                          <SelectItem value="Sharjah">Sharjah</SelectItem>
                          <SelectItem value="Ajman">Ajman</SelectItem>
                          <SelectItem value="Umm Al Quwain">
                            Umm Al Quwain
                          </SelectItem>
                          <SelectItem value="Ras Al Khaimah">
                            Ras Al Khaimah
                          </SelectItem>
                          <SelectItem value="Fujairah">Fujairah</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="eid"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Emirates ID" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reciept"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Reciept" {...field} type="file" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </Section>
  );
};

export default FormSection;
