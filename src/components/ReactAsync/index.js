/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import { useField } from '@rocketseat/unform';

export default function ReactAsync({
  name,
  defaultOptions,
  loadOptions,
  handleInputChange,
  placeHolder,
  ...rest
}) {
  const [value, setValue] = useState(null);
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#999999' : '#999999',
    }),
    control: () => ({
      border: '1px solid #dddddd',
      borderRadius: '4px',
      display: 'flex',
      width: '100%',
      height: '45px',
      marginTop: '8px',
    }),
    singleValue: provided => ({
      ...provided,
      color: '#999999',
    }),
  };

  const ref = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    if (defaultValue) {
      ref.current.select.state.value = defaultOptions.find(option => {
        return String(option.value) === String(defaultValue.value);
      });
      if (ref.current.select.state.value) {
        setValue(ref.current.select.state.value);
      } else {
        setValue(null);
      }
    }
  }, [defaultOptions, defaultValue]); // eslint-line-disable

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'select.state.value.value',
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions={defaultOptions}
      loadOptions={loadOptions}
      styles={customStyles}
      ref={ref}
      placeholder={placeHolder}
      // onInputChange={handleInputChange}
      getOptionValue={option => option.value}
      getOptionLabel={option => option.label}
      value={value || placeHolder}
      onChange={e => {
        setValue(e);
        if (handleInputChange) {
          handleInputChange(e);
        }
      }}
      {...rest}
    />
  );
}
