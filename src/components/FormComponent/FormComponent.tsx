"use client";

import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import mapIMage from "../../../public/formMap/Frame 3384456.avif";

function FormComponent() {
  const [charCount, setCharCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      destination: "",
      enquiry: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^\d{10,12}$/, "Phone number must be between 10 and 12 digits")
        .required("Phone number is required"),
      destination: Yup.string()
        .min(2, "Destination must be at least 2 characters")
        .required("Destination is required"),
      enquiry: Yup.string()
        .max(250, "Enquiry cannot exceed 250 characters")
        .required("Enquiry is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsLoading(true);

        const response = await fetch("https://dune-stageone.vercel.app/api/submitFolder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const result = await response.json();

        if (result.result === "success") {
          alert("Form submitted successfully!");
          resetForm();
          setCharCount(0);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("There was an error submitting the form.");
      } finally {
        console.log(values);
        setIsLoading(false);
      }
    },
  });

  const handleEnquiryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
    formik.handleChange(e);
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 h-[400px] md:h-[800px] m-6 rounded-3xl relative">
          <Image
            src={mapIMage}
            alt="Map Image"
            fill
            className="object-cover  rounded-3xl"
            style={{  borderRadius: "15px" }}
            onClick={() => window.open("https://maps.app.goo.gl/QdXWXngg1nVq8Vcy7?g_st=aw", "_blank")}
          />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center md:ml-8">
          <h2 className="text-2xl md:text-[44px] font-bold text-[#1e1b4b] mb-6 md:mb-8">Ready to See your Study Dreams take Flight?</h2>

          <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 md:py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none text-sm md:text-base ${formik.touched.name && formik.errors.name ? "border-red-500" : ""}`}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 md:py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none text-sm md:text-base ${formik.touched.email && formik.errors.email ? "border-red-500" : ""}`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 md:py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none text-sm md:text-base ${formik.touched.phone && formik.errors.phone ? "border-red-500" : ""}`}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="destination"
                placeholder="Preferred Study Destination"
                value={formik.values.destination}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 md:py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none text-sm md:text-base ${formik.touched.destination && formik.errors.destination ? "border-red-500" : ""}`}
                
              />
              {formik.touched.destination && formik.errors.destination && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.destination}</p>
              )}
            </div>

            <div className="relative">
              <textarea
                name="enquiry"
                placeholder="Your Enquiry"
                value={formik.values.enquiry}
                onChange={handleEnquiryChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 md:py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none resize-none text-sm md:text-base ${formik.touched.enquiry && formik.errors.enquiry ? "border-red-500" : ""}`}
                maxLength={250}
              />
              <span className="absolute bottom-2 right-2 text-xs md:text-sm text-gray-400">{charCount}/250</span>
              {formik.touched.enquiry && formik.errors.enquiry && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.enquiry}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                aria-label={isLoading ? "Submitting" : "Submit form"}
                className="w-32 cursor-pointer bg-[#9583FE] text-white py-2 md:py-3 px-6 rounded-full hover:bg-[#6d28d9] transition-colors text-sm md:text-base"
                disabled={isLoading}
              >
                {isLoading ? <ClipLoader size={24} color="#fff" /> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;