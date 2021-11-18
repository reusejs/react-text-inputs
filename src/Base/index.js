import FormLabel from "../formLabel";
import React from "react";
import { useRef } from "react";
import "../tailwind.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BaseInput({
  label = null,
  id = "",
  type = "text",
  placeholder = "Enter text",
  onChange,
  defaultValue = "",
  disabled = false,
  labelCorner = () => {},
  errorText = undefined,
  errorTextRenderer = (text) => {
    if (Array.isArray(text)) {
      return text.join(", ");
    }
    return text;
  },
  helperText = "",
  inputLeftIcon = null,
  inputRightIcon = null,
  FormLabelComponent = (props) => {
    return <FormLabel {...props} />;
  },
  ...props
}) {
  const myRef = useRef(null);

  return (
    <div>
      {label !== null && (
        <FormLabelComponent
          htmlFor={id}
          labelCorner={labelCorner}
          errorText={errorText}
          formLabelClasses={props.formLabelClasses}
        >
          {label}
        </FormLabelComponent>
      )}
      <div className={classNames("relative", label !== null ? "mt-1" : "")}>
        {inputLeftIcon !== null && (
          <div
            className={
              props.inputLeftIconClasses ||
              "absolute inset-y-0 top-0 left-0 flex items-center pl-3 pointer-events-none"
            }
          >
            {inputLeftIcon}
          </div>
        )}
        <input
          ref={myRef}
          type={type}
          id={id}
          className={classNames(
            props.basicInputClasses ||
              "block w-full rounded text-sm px-3 py-2 dark:bg-black bg-white focus:ring-blue-400 focus:border-blue-400 shadow outline-none",
            errorText === undefined
              ? props.noErrorClasses ||
                  "border border-gray-400 dark:border-gray-50 text-black dark:text-white"
              : "",
            errorText !== undefined
              ? props.withErrorClasses ||
                  "border border-red-600 dark:border-red-200 text-red-900 dark:text-red-200 placeholder-red-300"
              : "",
            inputLeftIcon ? props.withLeftIconClasses || "pl-10" : "",
            inputRightIcon ? props.withRightIconClasses || "pr-10" : ""
          )}
          placeholder={placeholder}
          value={defaultValue}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
        />
        {inputRightIcon !== null && (
          <div
            className={
              props.inputRightIconClasses ||
              "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
            }
          >
            {inputRightIcon}
          </div>
        )}
      </div>
      {helperText !== "" && errorText === undefined && (
        <p
          className={
            props.helperTextClassess ||
            "mt-2 text-sm text-gray-900 dark:text-white"
          }
        >
          {helperText}
        </p>
      )}
      {errorText !== undefined && (
        <p
          className={
            props.errorTextClassess ||
            "mt-2 text-sm text-red-600 dark:text-red-200"
          }
        >
          {errorTextRenderer(errorText)}
        </p>
      )}
    </div>
  );
}
