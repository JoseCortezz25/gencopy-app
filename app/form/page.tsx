"use client";

import { FormEvent, useState } from "react";

interface Form {
  fullname?: string,
  age?: string | number,
  phonenumber?: string | number,
}

const Form = () => {
  const [form, setForm] = useState<Form>({ fullname: '', age: '', phonenumber: '' });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Obtener los valores de los inputs
    const inputValues: Form = {};
    formData.forEach((value, key) => {
      inputValues[key as keyof Form] = value.toString();
    });

    console.log('Form submitted', inputValues);
    setForm(inputValues);
  };

  return (
    <>
      <div>A stunning Form. Simple but powerful</div>
      <form action="" onSubmit={onSubmit} className="bg-red-400">
        <div className="group-inputs">
          <label htmlFor="fullname">Fullname</label>
          <input type="text" id="fullname" name="fullname" />
        </div>

        <div className="group-inputs">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" />
        </div>

        <div className="group-inputs w-full bg-blue-400 border border-red-500" >
          <label htmlFor="phonenumber">Phone Number</label>
          <input type="text" id="phonenumber" name="phonenumber" />
        </div>
        <button type="submit">Clicksito</button>
      </form>
      {Object.keys(form).length === 0 && (
        <div>
          <div>Fullname: {form.fullname}</div>
          <div>Age: {form.age}</div>
          <div>Phone Number: {form.phonenumber}</div>
        </div>
      )}
    </>
  )
}

export default Form