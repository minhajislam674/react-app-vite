import React, { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  age: z.number({ invalid_type_error: "Age field is required" }).min(18),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input {...register("name")} id="name" type="text" />
      {errors.name && <p>{errors.name.message}</p>}

      <label htmlFor="age">Age</label>
      <input
        {...register("age", { valueAsNumber: true })}
        id="age"
        type="number"
      />
      {errors.age && <p>{errors.age.message}</p>}
      <button disabled={!isValid} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
