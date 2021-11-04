import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="course_id" {...register("course_id", {required: true, max: 11, min: 9, pattern: /[0-9]/i})} />
      <input type="text" placeholder="thai_name" {...register("thai_name", {required: true, min: 5, maxLength: 50, pattern: /^[กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุูเแโใไๅๆ็่้๊๋์]+$/i})} />
      <input type="text" placeholder="eng_name" {...register("eng_name", {required: true, min: 5, maxLength: 50, pattern: /^[a-zA-Z]+$/i})} />

      <input type="submit" />
    </form>
  );
}