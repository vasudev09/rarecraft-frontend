import React, { useState } from "react";
import Container from "../../custom/Container";
import Rating from "@mui/material/Rating";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useAuth } from "@/hooks/AuthContext";
import { Product, Review } from "@/types";
import { cn, getRating } from "@/utils";
import { Button } from "@/components/custom/Button";
import { Send } from "lucide-react";
import Link from "next/link";
import Toast from "../../custom/Toast";
import toast from "react-hot-toast";
import { ReviewAPI } from "@/APIs/review";
import Loading from "@/components/custom/Loading";

export default function AddReview({
  product,
  setReviews,
}: // reviews,
{
  product: Product;
  // reviews: Review[];
  setReviews: (value: Review[]) => void;
}) {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);

  const initialValues = {
    review: "",
    rating: "",
  };
  const handleSave = async (
    values: { review: string },
    { resetForm }: { resetForm: () => void } // destructure resetForm from Formik helpers
  ) => {
    if (loading) {
      return;
    }
    setLoading(true);

    if (!rating || rating === 0) {
      toast.custom(<Toast message="choose a rating 😠" status="error" />);
      setLoading(false);
      return;
    }

    const data = {
      product_id: product.id,
      review: values.review,
      rating: rating,
    };

    await ReviewAPI.add(data)
      .then((response) => {
        toast.custom(
          <Toast message={response.data.message} status="success" />
        );
        setReviews(response.data.reviews);
        resetForm();
        setRating(0);
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

  const validate = Yup.object({
    review: Yup.string().required().min(2).max(255),
    rating: Yup.mixed(),
  });

  return (
    <section>
      <Container>
        {loading && <Loading isLoading={loading} />}
        <div className="flex flex-col w-full gap-10">
          <div className="flex w-full font-bold text-2xl">Add review</div>
          <div className="flex">
            <div className="flex flex-wrap justify-between">
              <h1>Average note:</h1>
              <div className="flex">
                <Rating readOnly value={getRating(product)} precision={0.5} />
                <span className="text-xl font-bold text-yellow-800">
                  ({getRating(product)})
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={validate}
              onSubmit={async (values, { resetForm }) => {
                handleSave(values, { resetForm });
              }}
            >
              {({ errors }) => (
                <Form>
                  <div className="flex flex-col gap-4">
                    <Field
                      components="textarea"
                      name="review"
                      className={cn(
                        "w-full border border-black px-4 h-40 text-black ",
                        errors && "border border-red-300"
                      )}
                    />
                    <ErrorMessage
                      name="review"
                      component="div"
                      className="py-2 font-bold text-red-900"
                    />
                  </div>

                  <div className="flex mt-10">
                    <Rating
                      onChange={(event) => {
                        const target = event.target as HTMLInputElement;
                        setRating(parseInt(target.value));
                      }}
                      name="rating"
                      precision={0.5}
                      className="text-2xl"
                      style={{
                        fontSize: "32px",
                      }}
                    />
                  </div>

                  <div className="flex sm:w-full mt-10">
                    {isAuthenticated === true ? (
                      <Button
                        disabled={loading}
                        type="submit"
                        variant="primary"
                        className="w-full inline-flex gap-4 items-center"
                        size="lg"
                      >
                        <Send />
                        <span className="text-base">POST YOUR REVIEW</span>
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        className="w-full inline-flex gap-4 items-center"
                        size="lg"
                        asChild
                      >
                        <Link href="/signin">
                          <Send /> Post your review
                        </Link>
                      </Button>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Container>
    </section>
  );
}
