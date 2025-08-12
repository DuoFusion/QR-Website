import { FieldHookConfig, useField } from "formik";
import { useState } from "react";
import { TextInputProps } from "../../types";

export default function TextInput({ label, children, name, autoComplete = "off", type = "text", required, inputGroupIcon, ...props }: TextInputProps) {
  const { validate, ...inputProps } = props;
  const fieldConfig: FieldHookConfig<string> = { name, validate };
  const [field, meta] = useField(fieldConfig);

  const isPassword = type === "password";
  const [show, setShow] = useState(false);
  const toggleVisibility = () => setShow((prev) => !prev);

  const inputType = isPassword ? (show ? "text" : "password") : type;

  return (
    <div className={` ${isPassword ? "position-relative" : ""}`}>
      {label && (
        <label htmlFor={props.id || name}>
          {label}
          {required && <span className="required ps-1">*</span>}
        </label>
      )}

      {inputGroupIcon ? (
        <div className="input-group">
          <span className="input-group-text">{inputGroupIcon}</span>
          <input {...field} {...inputProps} autoComplete={autoComplete} type={inputType} placeholder={props.placeholder || ""} className={`form-control ${meta.touched && meta.error ? "is-invalid" : ""}`} />
        </div>
      ) : (
        <input {...field} {...inputProps} autoComplete={autoComplete} type={inputType} placeholder={props.placeholder || ""} className={`form-control ${meta.touched && meta.error ? "is-invalid" : ""}`} />
      )}

      {meta.touched && meta.error && <div className="invalid-feedback">{meta.error}</div>}

      {isPassword && (
        <div className="show-hide" onClick={toggleVisibility} style={{ cursor: "pointer" }}>
          <span className={!show ? "show" : ""} />
        </div>
      )}

      {children}
    </div>
  );
}
