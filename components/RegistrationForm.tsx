"use client";
import React, { ChangeEvent, useRef } from "react";

import Image from "next/image";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import toast from "react-hot-toast";

import { schema } from "@/schemas/Validation";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Button from "./Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const locale = usePathname();
  const t = locale === "/" ? en : ar;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    resolver: yupResolver(schema(t)) as any, // Use 'as any' to handle type mismatch

    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      emirate: "",
      eid: "",
      receipt: "",
      lan: locale === "/" ? 'en' : 'ar',
      selected: false,
      info: " ",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    let toastStatus = toast.loading(t.uploading_data);
    try {
      setIsLoading(true);
      data.contentType = data.receipt[0].type;
      data.receiptName = data.receipt[0].name;
      const response = await axios
        .post("/api/entries", data)
        .then(async (res) => {
          console.log(res);
          const formData = new FormData();
          Object.entries(res.data.fields).forEach(([key, value]) => {
            formData.append(key, value as string);
          });
          formData.append("file", data.receipt[0]);
          console.log(formData);
          const uploadResponse = await fetch(res.data.url, {
            method: "POST",
            body: formData,
          });
          if (uploadResponse.ok) {
            console.log(t.upload_successfull);
          } else {
            console.log("S3 Upload Error:", uploadResponse);
            console.log("Upload failed.");
          }

          toast.dismiss(toastStatus);
          toast.success(t.submission_completed);
          reset();
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      toast.error(t.upload_error_message + error);
      toast.dismiss(toastStatus);
    }
  };

  return (
    <div
      id="register"
      className="w-[90%] md:w-[70%]
    pb-14 pt-10 md:pt-0 md:pb-0
    md:mt-[9%]  justify-center items-center  "
    >
      <div className="">
        <div className="right">
          <h2
            className={` text-webBlue
          ${
            locale === "/"
              ? "font-DIN-Bold text-5xl md:text-5xl pl-4"
              : "font-DINArabic-Black text-5xl md:text-6xl pr-4"
          }
          `}
          >
            {t.registration}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="pl-4 pr-4 pt-2">
            <div className="form-field ">
              <Input
                id="name"
                label={t.name}
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="text"
              />
            </div>
            <div className="form-field">
              <Input
                id="mobile"
                label={t.mobile}
                disabled={isLoading}
                register={register}
                errors={errors}
                type="number"
              />
            </div>
            <div className="form-field">
              <Input
                id="email"
                label={t.email}
                disabled={isLoading}
                register={register}
                errors={errors}
                type="email"
              />
            </div>
            <div className="form-field">
              <Input
                id="emirate"
                label={t.emirate}
                disabled={isLoading}
                register={register}
                errors={errors}
                type="string"
              />
            </div>
            <div className="form-field">
              <Input
                id="eid"
                label={t.emirate_id_number}
                disabled={isLoading}
                register={register}
                errors={errors}
                type="number"
              />
            </div>
            <div className="form-field">
              <Input
                id="receipt"
                label={t.upload_purchase_receipt}
                disabled={isLoading}
                register={register}
                errors={errors}
                type="file"
              />
              <div className="mt-2 ml-2 uppercase text-xs cursor-pointer text-[#002E6D] font-neosans-regular ">
                ( {t.max_upload_size} )
              </div>
            </div>
            <div
              className={`form-field pt-4 ${isLoading ? "animate-pulse" : ""}
              ${locale === "/" ? "float-left" : "float-right"}`}
            >
              <Button
                arrow
                disabled={isLoading}
                label={`${isLoading ? t.form_submit_message : t.register_now}`}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
