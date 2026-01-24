import { useState } from "react";

// This defines a generic type called Errors.
// type LoginForm = {
//   email: string;
//   password: string;
// };
// keyof LoginForm
// "email" | "password"
// Record<"email" | "password", string>
// But this requires ALL fields to exist.
// Partial makes all properties optional.
// {
//   email?: string;
//   password?: string;
// }
type Errors<T> = Partial<Record<keyof T, string>>;

export const useForm = <T>(
  initialValues: T,
  validateFn: (values: T) => Errors<T>,
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Errors<T>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });

    // Validate field on change
    const fieldErrors = validateFn({
      ...values,
      [name]: value,
    });

    setErrors(fieldErrors);
  };

  const handleSubmitValidation = (): boolean => {
    const validationErrors = validateFn(values);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  return {
    values,
    setValues,
    errors,
    handleChange,
    handleSubmitValidation,
  };
};
