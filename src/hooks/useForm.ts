import { useState } from "react";

type Errors<T> = Partial<Record<keyof T, string>>;

export const useForm = <T extends Record<string, any>>(
  initialValues: T,
  validateFn: (values: T) => Errors<T>
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Errors<T>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
