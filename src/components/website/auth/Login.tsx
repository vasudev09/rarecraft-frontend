"use client";
import React, { useEffect, useState } from "react";
import Container from "../../custom/Container";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { cn } from "@/utils";
import { Button } from "@/components/custom/Button";
import { Send } from "lucide-react";
import toast from "react-hot-toast";
import Toast from "../../custom/Toast";
import { useRouter } from "next/navigation";
import Loading from "../../custom/Loading";
import Link from "next/link";
import { useAuth } from "@/hooks/AuthContext";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated === true) {
      router.push("/");
    }
  }, [isAuthenticated]);

  const initialValues = {
    email: "",
    password: "",
  };
  const validate = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });

  const handleSave = async (values: { email: string; password: string }) => {
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/signin",
        { method: "POST", body: JSON.stringify(values) }
      );

      if (!response.ok) {
        response.json().then((data) => {
          toast.custom(<Toast message={data.message} status="error" />);
          return data;
        });
      } else {
        response.json().then((data) => {
          setIsAuthenticated(true);
          toast.custom(<Toast message={data.message} status="success" />);
          router.push("/");
          return data;
        });
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);

    // signIn("credentials", {
    //   ...values,
    //   redirect: false,
    // })
    //   .then((callback) => {
    //     if (callback?.error) {
    //       toast.custom(
    //         <Toast message="A error occurs please retry" status="error" />
    //       );
    //       setLoading(false);
    //     }

    //     if (callback?.ok && !callback?.error) {
    //       toast.custom(
    //         <Toast message="Logged in , Redirecting..." status="success" />
    //       );
    //       router.push("/cart");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  return (
    <section className="py-10 my-10 ">
      {loading && <Loading isLoading={loading} />}
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-2xl font-bold tracking-widest">
              Login to your account
            </h1>
            <p className="text-center text-base my-2">
              Fill the forms and then click on the button to submit
            </p>
          </div>

          <div
            className="
                flex flex-col w-full items-center"
          >
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={validate}
              onSubmit={async (values) => {
                handleSave(values);
              }}
            >
              {({
                errors,

                /* and other goodies */
              }) => (
                <Form>
                  <div className="flex flex-col gap-4 w-[320px]">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="text"
                      name="email"
                      className={cn(
                        "border border-black px-4 text-black py-2 rounded-md",
                        errors.email && "border border-red-300"
                      )}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="py-2 font-bold text-red-900"
                    />
                  </div>

                  <div className="flex flex-col gap-4 mt-4 w-[320px]">
                    <label htmlFor="email">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className={cn(
                        "w-full border border-black px-4 py-2 rounded-md text-black ",
                        errors.password && "border border-red-300"
                      )}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="py-2 font-bold text-red-900"
                    />
                  </div>

                  <div className="flex mt-10"></div>

                  <div className="flex sm:w-full lg:max-w-lg">
                    <Button
                      disabled={loading}
                      type="submit"
                      variant="primary"
                      className="w-full inline-flex gap-4 items-center"
                      size="lg"
                    >
                      <Send />
                      <span className="text-xl">Login</span>
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="flex justify-center w-full  items-center mt-10">
            <Link href="/register" className="text-2x font-bold">
              Create an account !
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
