import { useForm, type SubmitHandler } from "react-hook-form";

export const Form = () => {
  interface formData {
    name: string;
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formData>();

  const onSubmit: SubmitHandler<formData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          placeholder="enter the name"
          id="name"
          {...register("name", { required: "name is required" })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          placeholder="enter the email"
          {...register("email", { required: "email is required" })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          id="password"
          placeholder="enter the password"
          {...register("password", {
            minLength: {
              value: 8,
              message: "password at least 8 character long",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
