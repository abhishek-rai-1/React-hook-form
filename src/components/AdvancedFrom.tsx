import { useForm } from "react-hook-form";
import "./styles.css";

interface formData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  completeLocation: string;
}

export const AdvancedFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = (data: formData) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="FirstName">First Name : </label>
          <input
            type="text"
            placeholder="first Name.."
            id="FirstName"
            {...register("firstName", { required: "first name is required" })}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>first name is required</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name : </label>
          <input
            type="text"
            placeholder="Last Name.."
            id="lastName"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p style={{ color: "red" }}>Last name is required</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            placeholder="Email.."
            id="email"
            {...register("email", {
              required: "email address is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "invalid email address",
              },
            })}
          />
          {errors.email && <p style={{ color: "red" }}>email is required</p>}
        </div>

        <div>
          <label htmlFor="city">city : </label>
          <input
            type="text"
            placeholder="city.."
            id="city"
            {...register("city", { required: "city is required" })}
          />
          {errors.city && <p style={{ color: "red" }}>city is required</p>}
        </div>

        <div>
          <label htmlFor="state">state : </label>
          <input
            type="text"
            placeholder="state.."
            id="state"
            {...register("state", { required: "state is required" })}
          />
          {errors.state && <p style={{ color: "red" }}>state is required</p>}
        </div>

        <div>
          <label htmlFor="zip">zip code : </label>
          <input
            type="text"
            placeholder="zip code.."
            id="zip"
            {...register("zip", { required: "zip code is required" })}
          />
          {errors.zip && <p style={{ color: "red" }}>zip code is required</p>}
        </div>

        <div>
          <label htmlFor="Country">Country : </label>
          <input
            type="text"
            placeholder="Country.."
            id="Country"
            {...register("country", { required: "Country is required" })}
          />
          {errors.country && (
            <p style={{ color: "red" }}>Country is required</p>
          )}
        </div>

        <div>
          <label htmlFor="completeLocation">complete Location : </label>
          <input
            type="text"
            placeholder="complete Location.."
            id="completeLocation"
            {...register("completeLocation", {
              required: "complete Location is required",
            })}
          />
          {errors.completeLocation && (
            <p style={{ color: "red" }}>complete Location is required</p>
          )}
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};
