import Head from "next/head";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterType } from "../types";
type Props = {};
const register = (props: Props) => {
  const [registerInfo, setRegisterInfo] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>();
  const onSubmit: SubmitHandler<RegisterType> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>
      <div className="flex justify-center items-center h-screen">
        <form
          className="flex flex-col gap-6 p-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            id=""
            placeholder="username"
            {...register("username", { required: true })}
          />
          {errors.username && <p>girmek Zorunludur.</p>}
          <input
            type="text"
            id=""
            placeholder="E-mail"
            {...register("email", { required: true })}
          />
          <input
            type="text"
            id=""
            placeholder="First Name"
            {...register("first_name")}
          />
          <input
            type="text"
            id=""
            placeholder="Last Name"
            {...register("last_name")}
          />
          <input
            type="text"
            id=""
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <input
            type="text"
            id=""
            placeholder="Password Again"
            {...register("password2", { required: true })}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
export default register;
