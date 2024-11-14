import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AuthService from "@/services/auth-service";
import { useForm } from "react-hook-form";
import { CardHeader, CardContent, CardTitle, Card, CardFooter } from "@/components/ui/card";
import { formSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import FullScreenLoader from "@/components/loader/full-screen-loader";
import { useBool } from "@/hooks/useBool";

function SignupForm({ onSuccess = () => {} }: { onSuccess?: () => void }) {
  const { getState, toggleState } = useBool();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toggleState("isLoading");
    await AuthService.signup(values.fullname, values.username, values.password, values.email)
      .then((res) => {
        console.log(res);
        onSuccess();
      })
      .finally(() => {
        toggleState("isLoading");
      });
  }
  return (
    <>
      <FullScreenLoader isLoading={getState("isLoading")} />
      <Card className="w-full min-w-[460px] rounded-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl">Create an account</CardTitle>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <FormField
                    control={form.control}
                    name={"fullname"}
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <FormLabel>Full name</FormLabel>
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
                    name={"username"}
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <FormLabel>Nickname</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <FormField
                  control={form.control}
                  name={"email"}
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <FormLabel>Email</FormLabel>
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
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Register
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </>
  );
}

export default SignupForm;
