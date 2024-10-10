import React, { useEffect, useState } from "react";
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
import { ErrorMessage, Field, Form, Formik, FieldArray } from "formik";
import Loading from "../../custom/Loading";
import { cn } from "@/utils";
import { Button } from "@/components/custom/Button";
import { ProductAPI } from "@/APIs/product";
import { Category, Product, Brand, Detail } from "@/types";
import { Edit } from "lucide-react";
import { CategoryAPI } from "@/APIs/category";
import { Account } from "@/APIs/account";

export default function ProductModal({
  choice,
  item,
}: {
  choice: string;
  item?: Product;
}) {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>();
  const [myBrands, setMyBrands] = useState<Brand[]>();

  useEffect(() => {
    async function getCategories() {
      setLoading(true);
      await CategoryAPI.getList()
        .then((response) => {
          setCategories(response.data);
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
    async function getMyBrands() {
      setLoading(true);
      await Account.myBrands()
        .then((response) => {
          setMyBrands(response.data);
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
    getCategories();
    getMyBrands();
  }, []);

  const initialValues = {
    name: item?.name || "",
    description: item?.description || "",
    content: item?.content || "",
    brand: item?.brand.id || "",
    category: item?.category.id || "",
    price: item?.price || "",
    discount: item?.discount || 0,
    images: [],
    details:
      item?.details ||
      ([
        { key: "", value: "" },
        { key: "", value: "" },
      ] as Detail[]),
    choice: choice,
  };

  const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/webp"];
  const validate = Yup.object({
    name: Yup.string().required().min(3),
    description: Yup.string().required().min(6),
    content: Yup.string().nullable(),
    brand: Yup.string().required("Brand is required"),
    category: Yup.string().required("Category is required"),
    price: Yup.number().required("Price is required").positive(),
    discount: Yup.number()
      .min(0, "Discount cannot be less than 0")
      .max(100, "Discount cannot be more than 100"),
    images: Yup.array()
      .of(
        Yup.mixed().test(
          "FILE_FORMAT",
          "Uploaded file has unsupported format.",
          (value) => {
            const file = value as File | null;
            return !file || (file && SUPPORTED_FORMATS.includes(file.type));
          }
        )
      )
      .when("choice", {
        is: "add",
        then: (schema) => schema.min(4, "At least 4 images are required"),
        otherwise: (schema) => schema,
      }),
    details: Yup.array()
      .of(
        Yup.object().shape({
          key: Yup.string().required("Key is required"),
          value: Yup.string().required("Value is required"),
        })
      )
      .min(1, "At least one key-value pair is required"),
  });

  const handleSubmit = async (values: {
    name: string;
    description: string;
    content: string;
    brand: string | number;
    category: string | number;
    price: string | number;
    discount: string | number;
    images: File[] | [];
    details: Detail[];
  }) => {
    if (loading) {
      return;
    }
    setLoading(true);

    const [str_brand, str_category, str_price, str_discount] = [
      String(values.brand),
      String(values.category),
      String(values.price),
      String(values.discount),
    ];

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("content", values.content);
    formData.append("brand", str_brand);
    formData.append("category", str_category);
    formData.append("price", str_price);
    formData.append("discount", str_discount);
    const sortedImages = values.images?.sort(
      (a: File, b: File) => a.lastModified - b.lastModified
    );
    sortedImages?.forEach((image: File, index: number) => {
      formData.append(`image${index}`, image);
    });
    formData.append("details", JSON.stringify(values.details));

    if (choice === "add") {
      await ProductAPI.add(formData)
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
      await ProductAPI.update(formData, { params: { id: item?.id } })
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        {choice === "add" ? (
          <button className="ml-2 bg-primary-600 text-white py-2 px-4 rounded-md whitespace-nowrap hover:bg-primary-500">
            Add Product
          </button>
        ) : (
          <Edit className="cursor-pointer w-5 h-5" />
        )}
      </DialogTrigger>

      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{choice === "add" ? "Add" : "Edit"} Product</DialogTitle>
          <DialogDescription>Complete the form and submit.</DialogDescription>
        </DialogHeader>

        <div>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {({ errors, setFieldValue }) => (
              <Form className="w-full space-y-6">
                {loading && <Loading isLoading={loading} />}
                <div className="flex flex-col md:flex-row gap-6 w-full">
                  <div className="flex flex-col gap-1 w-full md:w-1/2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Product Name
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

                  <div className="flex flex-col gap-1 w-full md:w-1/2">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Description
                    </label>
                    <Field
                      as="textarea"
                      name="description"
                      rows={4}
                      className={cn(
                        "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500",
                        errors.description && "border border-red-300"
                      )}
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="py-1 text-red-600 text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col gap-1 w-full md:w-1/2">
                    <label
                      htmlFor="brand"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Brand
                    </label>
                    <Field
                      as="select"
                      name="brand"
                      className="block w-full p-2.5 rounded-lg border bg-gray-50 text-sm"
                    >
                      <option value="" disabled>
                        Select Brand
                      </option>
                      {myBrands?.map((brand) => (
                        <option key={brand.id} value={brand.id}>
                          {brand.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="brand"
                      component="div"
                      className="py-1 text-red-600 text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1 w-full md:w-1/2">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Category
                    </label>
                    <Field
                      as="select"
                      name="category"
                      className="block w-full p-2.5 rounded-lg border bg-gray-50 text-sm"
                    >
                      <option value="" disabled>
                        Select Category
                      </option>
                      {categories?.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="category"
                      component="div"
                      className="py-1 text-red-600 text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <label
                    htmlFor="content"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Additional Content
                  </label>
                  <Field
                    as="textarea"
                    name="content"
                    rows={5}
                    className={cn(
                      "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500",
                      errors.content && "border border-red-300"
                    )}
                  />
                  <ErrorMessage
                    name="content"
                    component="div"
                    className="py-1 text-red-600 text-sm"
                  />
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col gap-1 w-full md:w-1/2">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Price
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        $
                      </span>
                      <Field
                        type="number"
                        name="price"
                        className={cn(
                          "block w-full pl-8 py-2.5 pr-2.5 rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500",
                          errors.price && "border border-red-300"
                        )}
                      />
                    </div>
                    <ErrorMessage
                      name="price"
                      component="div"
                      className="py-1 text-red-600 text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1 w-full md:w-1/2">
                    <label
                      htmlFor="discount"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Discount (%)
                    </label>
                    <Field
                      type="number"
                      name="discount"
                      className={cn(
                        "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500",
                        errors.discount && "border border-red-300"
                      )}
                    />
                    <ErrorMessage
                      name="discount"
                      component="div"
                      className="py-1 text-red-600 text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="block text-sm font-medium text-gray-900">
                    Product Images {choice === "add" ? "(4 Required)" : ""}
                  </label>
                  <input
                    type="file"
                    name="images"
                    accept=".jpg, .jpeg, .png, .webp"
                    multiple
                    onChange={(event) => {
                      const files = event.currentTarget.files;
                      if (files) {
                        setFieldValue("images", Array.from(files));
                      } else {
                        setFieldValue("images", []);
                      }
                    }}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                  />
                  <ErrorMessage
                    name="images"
                    component="div"
                    className="py-1 text-red-600 text-sm"
                  />
                </div>

                <FieldArray name="details">
                  {({ remove, push }) => (
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-900">
                        Product Details
                      </label>
                      <FieldArray name="details">
                        {({ form }) => (
                          <>
                            {form.values.details.map(
                              (_: Detail, index: number) => (
                                <div
                                  key={index}
                                  className="flex flex-wrap gap-4 items-start"
                                >
                                  <div className="w-full md:w-5/12">
                                    <Field
                                      name={`details.${index}.key`}
                                      placeholder={
                                        index === 0
                                          ? "Model"
                                          : index === 1
                                          ? "Weight"
                                          : ""
                                      }
                                      className="block w-full p-2.5 rounded-lg border bg-gray-50 text-sm"
                                    />
                                    <ErrorMessage
                                      name={`details.${index}.key`}
                                      component="div"
                                      className="py-1 text-red-600 text-sm"
                                    />
                                  </div>
                                  <div className="w-full md:w-5/12">
                                    <Field
                                      name={`details.${index}.value`}
                                      placeholder={
                                        index === 0
                                          ? "HGD9M38"
                                          : index === 1
                                          ? "500g"
                                          : ""
                                      }
                                      className="block w-full p-2.5 rounded-lg border bg-gray-50 text-sm"
                                    />
                                    <ErrorMessage
                                      name={`details.${index}.value`}
                                      component="div"
                                      className="py-1 text-red-600 text-sm"
                                    />
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (index !== 0) remove(index);
                                    }}
                                    className="md:w-auto w-full text-red-600 p-2"
                                  >
                                    Remove
                                  </button>
                                </div>
                              )
                            )}
                          </>
                        )}
                      </FieldArray>
                      <button
                        type="button"
                        onClick={() => push({ key: "", value: "" })}
                        className="px-2 py-2 rounded-md border text-sm"
                      >
                        Add Detail
                      </button>
                    </div>
                  )}
                </FieldArray>

                <div className="flex justify-end">
                  <Button type="submit" className="p-6">
                    {choice === "add" ? "Add" : "Update"} Product
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
