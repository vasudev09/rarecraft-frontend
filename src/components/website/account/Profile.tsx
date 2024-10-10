/* eslint-disable  no-useless-escape */
"use client";
import { Customer } from "@/types";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Toast from "../../custom/Toast";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { cn } from "@/utils";
import { Button } from "@/components/custom/Button";
import { Send } from "lucide-react";
import Loading from "../../custom/Loading";
import { Account } from "@/APIs/account";

type initialValuesProps = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState<Customer | null>();
  const [loading, setLoading] = useState(false);

  function getUser() {
    setLoading(true);
    Account.getProfile()
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.custom(<Toast message={error.message} status="error" />);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getUser();
  }, []);

  const initialValues = {
    name: user?.user.username || "",
    email: user?.user.email || "",
    password: "",
    confirm_password: "",
  };

  const validate = Yup.object({
    name: Yup.string()
      .required()
      .min(2, "Must be at least 2 characters")
      .max(60, "Must be 60 characters or less"),
    email: Yup.string().required().email(),
    password: Yup.string()
      .nullable()
      .min(8, "Password must contain at least 8 characters"),
    confirm_password: Yup.string().when("password", {
      is: (password: string | null | undefined) => !!password,
      then: (schema) =>
        schema
          .required("Confirm password is required")
          .oneOf([Yup.ref("password")], "Passwords must match"),
      otherwise: (schema) => schema.nullable(),
    }),
  });

  const handleSave = async (values: initialValuesProps) => {
    setLoading(true);
    const data: any = {
      username: values.name,
    };
    if (values.password) {
      data.password = values.password;
    }

    await Account.updateProfile(data)
      .then((response) => {
        toast.custom(
          <Toast message={response.data.message} status="success" />
        );
        router.refresh();
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          toast.custom(
            <Toast
              message={error.response.data.message || "Something went wrong"}
              status="error"
            />
          );
        } else {
          toast.custom(<Toast message={error.message} status="error" />);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={async (values) => {
        handleSave(values);
      }}
    >
      {({ errors }) => (
        <Form className="p-4 w-full">
          {loading && <Loading isLoading={loading} />}

          <div className="flex flex-wrap gap-10 mb-10">
            <div className="w-full">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                className={cn(
                  "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500",
                  errors.name && "border border-red-300"
                )}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="py-2 font-medium text-red-900"
              />
            </div>

            <div className="w-full">
              <label htmlFor="email">Email</label>
              <Field
                type="text"
                name="email"
                disabled={true}
                className={cn(
                  "cursor-not-allowed block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500",
                  errors.email && "border border-red-300"
                )}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="py-2 font-medium text-red-900"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-10 mb-10">
            <div className="w-full">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                className={cn(
                  "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500",
                  errors.password && "border border-red-300"
                )}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="py-2 font-medium text-red-900"
              />
            </div>

            <div className="w-full">
              <label htmlFor="password">Confirm Password</label>
              <Field
                type="password"
                name="confirm_password"
                className={cn(
                  "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500",
                  errors.password && "border border-red-300"
                )}
              />
              <ErrorMessage
                name="confirm_password"
                component="div"
                className="py-2 font-medium text-red-900"
              />
            </div>
          </div>

          <div className="flex sm:w-full">
            <Button
              disabled={loading}
              type="submit"
              variant="primary"
              className="w-full inline-flex gap-4 items-center"
              size="lg"
            >
              <Send />
              <span className="text-xl">Update </span>
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
