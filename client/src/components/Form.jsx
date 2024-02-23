import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import TextInput from "./TextInput";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    jobTitle: yup.string().required(),
    company: yup.string().required(),
    industry: yup.string(),
    companySize: yup.number().positive(true).integer().required(),
    phoneNumber: yup.string().required(),
  })
  .required();
const Form = () => {
  const { control } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      company: "",
      industry: "",
      companySize: null,
      phoneNumber: "",
    },
  });
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-2 gap-x-12">
          <TextInput
            type="text"
            name="firstName"
            label="First Name"
            placeholder="John"
            control={control}
          />
          <TextInput
            type="text"
            name="lastName"
            label="Last Name"
            placeholder="Doe"
            control={control}
          />
          <TextInput
            type="email"
            name="email"
            label="Work email"
            placeholder="john.doe@example.com"
            control={control}
          />
          <TextInput
            type="text"
            name="jobTitle"
            label="Job Title"
            placeholder="Software Engineer"
            control={control}
          />
          <TextInput
            type="text"
            name="company"
            label="Company"
            placeholder="Google"
            control={control}
          />
          <TextInput
            type="text"
            name="industry"
            label="Industry"
            placeholder="Technology"
            control={control}
          />
          <TextInput
            type="text"
            name="companySize"
            label="Company Size"
            placeholder="50 ..."
            control={control}
          />
          <TextInput
            type="text"
            name="phoneNumber"
            label="Phone Number"
            placeholder="+213 0555 ..."
            control={control}
          />
        </div>
        <div className=" flex justify-center mt-4">
            <button className=" px-10 bg-teal-700 py-2 rounded-md text-yellow-50 font-medium text-lg">
                Sign un
            </button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Form;
