import { Brand, Product } from "@/types";
import { Trash2Icon } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Toast from "../../custom/Toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/custom/AlertDialog";
import Loading from "../../custom/Loading";
import { ProductAPI } from "@/APIs/product";
import { BrandAPI } from "@/APIs/brand";

export default function ModalDeleteAddress({
  choice,
  item,
}: {
  choice: string;
  item: Product | Brand;
}) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    if (choice === "product") {
      await ProductAPI.delete({
        params: {
          id: item.id,
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
    } else if (choice === "brand") {
      await BrandAPI.delete({
        params: {
          id: item.id,
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

  return (
    <>
      {loading && <Loading isLoading={loading} />}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Trash2Icon className="text-red-800 cursor-pointer" />
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              {choice === "brand"
                ? ` ${choice} and remove all products associated with this brand.`
                : ` product.`}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
