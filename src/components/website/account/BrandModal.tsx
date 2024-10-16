import React, { useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import Toast from "../../custom/Toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/custom/Dialog";
import { Edit } from "lucide-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Loading from "../../custom/Loading";
import { cn } from "@/utils";
import { Button } from "@/components/custom/Button";
import { Brand } from "@/types";
import Image from "next/image";
import { BrandAPI } from "@/APIs/brand";
import model from "@/utils/gemini";
import { Wand } from "lucide-react";

export default function BrandModal({
  choice,
  item,
}: {
  choice: string;
  item?: Brand;
}) {
  const [loading, setLoading] = useState(false);
  const [loadingGemini, setLoadingGemini] = useState(false);
  const [generatedDescription, setGeneratedDescription] = useState("");

  const initialValues = {
    name: item?.name || "",
    description: item?.description || "",
    image: null,
    choice: choice,
  };

  const SUPPORTED_FORMATS = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
  ];
  const validate = Yup.object({
    name: Yup.string().required().min(3).max(30),
    description: Yup.string().required().min(3),
    image: Yup.mixed()
      .test("FILE_FORMAT", "Uploaded file has unsupported format.", (value) => {
        const file = value as File | null;
        return !file || (file && SUPPORTED_FORMATS.includes(file.type));
      })
      .when("choice", {
        is: "add",
        then: (schema) => schema.required("Image is required"),
        otherwise: (schema) => schema.nullable(),
      }),
  });

  const handleSubmit = async (values: {
    name: string;
    description: string;
    image: null | File;
  }) => {
    if (loading) {
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    if (values.image) {
      formData.append("image", values.image);
    }

    if (choice === "add") {
      await BrandAPI.add(formData)
        .then((response) => {
          toast.custom(
            <Toast message={response.data.message} status="success" />
          );
          window.location.reload();
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
    } else if (choice === "edit") {
      await BrandAPI.update(formData, {
        params: {
          id: item?.id,
        },
      })
        .then((response) => {
          toast.custom(
            <Toast message={response.data.message} status="success" />
          );
          window.location.reload();
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
    }
  };

  const handleGenerateDescription = async (
    values: { name: string },
    setFieldValue: (
      field: string,
      value: string | number | undefined | File
    ) => void
  ) => {
    if (!values.name || values.name.length < 3) {
      toast.custom(
        <Toast message="Please enter atleast 3 characters" status="error" />
      );
      return;
    }

    try {
      setLoadingGemini(true);
      const prompt = `Create a clear, friendly, and inviting paragraph to describe my artisan brand called "${values.name}". The brand focuses on handmade, creative products that highlight craftsmanship and sustainability. Keep the tone approachable and authentic, avoiding complex words or formal language. The description should sound welcoming to everyday customers who appreciate unique, handcrafted items, without being too technical or elaborate. Make it easy to read and relatable, encouraging customers to connect with the brand.`;
      const result = await model.generateContent(prompt);
      const description = result.response.text();
      setGeneratedDescription(description);
      setFieldValue("description", description);
    } catch (error) {
      console.log(error);
      toast.custom(
        <Toast message="Failed to generate description" status="error" />
      );
    } finally {
      setLoadingGemini(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {choice === "add" ? (
          <button className="ml-2 bg-primary-600 text-white py-2 px-4 rounded-md whitespace-nowrap hover:bg-primary-500">
            Add Brand
          </button>
        ) : (
          <Edit className="cursor-pointer w-5 h-5" />
        )}
      </DialogTrigger>

      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{choice === "add" ? "Add" : "Edit"} Brand</DialogTitle>
          <DialogDescription>Complete the form and submit.</DialogDescription>
        </DialogHeader>

        <div>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {({ errors, setFieldValue, values }) => (
              <Form className="w-full space-y-6">
                {loading && <Loading isLoading={loading} />}

                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col gap-1 w-full md:w-1/2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Brand Name
                    </label>
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
                      className="py-1 text-red-600 text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1 w-full md:w-2/3 relative">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Description
                    </label>
                    <button
                      type="button"
                      className={`absolute right-0 top-0 flex flex-row gap-3 cursor-pointer text-primary-500 px-2 rounded-md ${
                        loadingGemini ? "animate-pulse" : ""
                      }`}
                      onClick={() =>
                        handleGenerateDescription(values, setFieldValue)
                      }
                      disabled={loadingGemini}
                    >
                      <Wand className="h-5 w-5" />
                      <p className="text-[14px] font-semibold">Auto generate</p>
                    </button>
                    <Field
                      as="textarea"
                      name="description"
                      rows={6}
                      value={generatedDescription || initialValues.description}
                      className={cn(
                        "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500",
                        errors.description && "border border-red-300"
                      )}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setGeneratedDescription(e.target.value)
                      }
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="py-1 text-red-600 text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1 w-full md:w-1/2">
                  {choice === "edit" && item?.image && (
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.image}
                        alt="Brand Image"
                        width={80}
                        height={80}
                      />
                      <label className="text-sm">Current Image</label>
                    </div>
                  )}
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-900"
                  >
                    {choice === "edit" ? "Change Image" : "Upload Image"}
                  </label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      const file = event.currentTarget.files?.[0] || null;
                      setFieldValue("image", file);
                    }}
                    className={cn(
                      "block w-full md:w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500",
                      errors.image && "border border-red-300"
                    )}
                  />
                  <ErrorMessage
                    name="image"
                    component="div"
                    className="py-1 text-red-600 text-sm"
                  />
                </div>

                <div className="w-full">
                  <Button
                    disabled={loading}
                    type="submit"
                    variant="primary"
                    className="w-full rounded-lg border border-gray-200 bg-primary-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-gray-100"
                    size="lg"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </DialogContent>
    </Dialog>
  );
}
