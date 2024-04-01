"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username should be at least 2 characters."
  }).max(50),
  password: z.string().min(6, {
    message: "Password should be at least 6 characters."
  }).max(50)
})

const SignInForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    router.push("/");
  }

  return (
    <div className="flex flex-col bg-black w-[90%] p-5 bg-zinc-800 rounded-md gap-2 md:w-[60%] lg:w-[40%]">
      <h1 className="text-2xl font-bold text-orange-400">Sign In</h1>
      <h1 className="text-slate-100 font-light opacity-0.1">Please fill in your data to sign in</h1>
    
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field}/>
                </FormControl>
                <FormDescription>
                { /* eslint-disable-next-line react/no-unescaped-entities */ }
                  This is your account's name
                </FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field}/>
                </FormControl>
                <FormDescription>
                  { /* eslint-disable-next-line react/no-unescaped-entities */ }
                  This is your account's name
                </FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />

          <Button className="mt-5">Submit</Button>
          <p className="text-sm text-secondary-foreground">You are not registered yet? <Link href="/sign-up" className="text-primary">Sign up</Link></p>
        </form>
      </Form>
    </div>
  )
}

export default SignInForm;