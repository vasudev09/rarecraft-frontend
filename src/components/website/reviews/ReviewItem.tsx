import { Button } from "@/components/custom/Button";
import { Review } from "@/types";
import { Rating } from "@mui/material";
import { ThumbsUp } from "lucide-react";
import { useAuth } from "@/hooks/AuthContext";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Toast from "@/components/custom/Toast";
import { ReviewAPI } from "@/APIs/review";

export default function ReviewItem({ item }: { item: Review }) {
  const { isAuthenticated } = useAuth();
  const [likes, setLikes] = useState(item.likes.length);
  const [loading, setLoading] = useState(false);

  const handleLike = async () => {
    if (loading) {
      return;
    }
    if (isAuthenticated !== true) {
      toast.custom(<Toast message="Please login to like" status="error" />);
      return;
    }
    setLoading(true);
    await ReviewAPI.like({
      params: {
        id: item.id,
      },
    })
      .then((response) => {
        setLikes(response.data.likes.length);
        toast.custom(
          <Toast message={response.data.message} status="success" />
        );
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
    <article className="p-6 text-base bg-white rounded-lg ">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="inline-flex item-center mr-3 text-sm text-gray-900">
            <Image
              alt="review"
              src={"https://cdn-icons-png.flaticon.com/128/149/149071.png"}
              width="40"
              height="40"
              className="mr-2 w-auto rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-black">
                {item.review_by ? item.review_by : "unknown"}
              </span>
              <div className="flex"> {item.created_at}</div>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className={`bg-transparent rounded-full w-24  px-4 py-2 flex gap-4 justify-around ${
            loading ? "cursor-wait" : ""
          }`}
          disabled={loading}
          onClick={() => handleLike()}
        >
          <ThumbsUp />
          <span>Like</span>
          <span>{likes}</span>
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <p>{item.review} </p>
        <Rating value={item.rating} precision={0.5} readOnly />
      </div>
    </article>
  );
}
