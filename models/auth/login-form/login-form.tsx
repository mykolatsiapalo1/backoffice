"use client";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { CardHeader, CardContent, CardTitle, Card, CardFooter } from "@/components/ui/card";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formSchema } from "./schema";
import { useBool } from "@/hooks/useBool";
// import AuthService from "@/services/auth-service";
import FullScreenLoader from "@/components/loader/full-screen-loader";
import { useRouter } from "next/navigation";

function LoginForm() {
  const { changeState, getState } = useBool();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    changeState("isLoading", true);
   
  }

  const handleGoogleLogin = () => {
    // AuthService.googleLogin().then((response) => {});
  };
  return (
    <>
      <FullScreenLoader isLoading={getState("isLoading")} />
      <Card className="rounded-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <FormField
                  control={form.control}
                  name={"username"}
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </>
                  )}
                />
              </div>
              <div className="space-y-1">
                <FormField
                  control={form.control}
                  name={"password"}
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </>
                  )}
                />
              </div>
              <div className="mb-6 flex items-start underline">
                <Link href={"/forgot-password"} className="text-sm font-medium text-gray-900 dark:text-white">
                  Forgot password?
                </Link>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
              <Button  type="submit" className="w-full">
                Sign in
              </Button>
              <span className="text-sm text-gray-500">or</span>
              <Button type="button" onClick={handleGoogleLogin} variant={'outline'} className="w-full">
                Sign in with Google
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </>
  );
}

export default LoginForm;
