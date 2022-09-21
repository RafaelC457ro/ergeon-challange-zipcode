import cx from "classnames";
import "./ZipCodeInput.css";
import React, { useEffect, useState } from "react";

// validate zip code american
const validateZipCode = (zipCode: string): boolean => {
  // regex to validate zip code american only digits
  const regex = /^\d{5}(?:[-\s]\d{4})?$/;
  return regex.test(zipCode);
};

const transformZipCode = (zipCode: string): string => {
  const regex = /[^0-9]/g;
  // limit to 5 digits
  return zipCode.replace(regex, "").slice(0, 5);
};

export function ZipCodeInput(): JSX.Element {
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState(false);
  // touched
  const [touched, setTouched] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    // check if is digit or '-'

    setZipCode(transformZipCode(value));
    setTouched(true);
  };

  useEffect(() => {
    setError(!validateZipCode(zipCode));
  }, [zipCode]);

  return (
    <div className="ZipCode">
      <label htmlFor="zipCode">Zip Code</label>
      <input
        className={cx("ZipCode-input", {
          "ZipCode-input--error": error && touched,
        })}
        id="zipCode"
        type="text"
        maxLength={5}
        value={zipCode}
        onChange={handleChange}
      />
    </div>
  );
}
