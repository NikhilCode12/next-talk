import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Input = ({
  inputRef,
  type,
  placeholder,
  value,
  onChange,
  name,
  autoComplete,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getInputType = () => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    }
    return type;
  };

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type={getInputType()}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className={`px-4 py-2 outline-none border-none focus:ring-2 focus:ring-indigo-400 mb-4 rounded-lg bg-slate-900 w-full text-white placeholder-gray-500`}
        autoComplete={autoComplete}
        maxLength={getInputType() === "password" && 20}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 top-[0.65rem] right-4 h-4"
        >
          <FontAwesomeIcon
            size={"sm"}
            icon={showPassword ? faEyeSlash : faEye}
            className="text-slate-400"
          />
        </button>
      )}
    </div>
  );
};

export default Input;
