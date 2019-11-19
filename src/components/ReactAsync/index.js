/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { useField } from '@rocketseat/unform';

export default function ReactAsync({
  name,
  defaultOptions,
  loadOptions,
  handleInputChange,
  ...rest
}) {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#999999' : '#999999',
    }),
    control: () => ({
      border: '1px solid #dddddd',
      borderRadius: '4px',
      display: 'flex',
      height: '45px',
      marginTop: '8px',
    }),
    singleValue: provided => ({
      ...provided,
      color: '#999999',
    }),
  };

  const ref = useRef(null);
  const { fieldName, registerField } = useField(name);

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
      placeholder="Selecione o aluno..."
      onInputChange={handleInputChange}
      getOptionValue={option => option.value}
      getOptionLabel={option => option.label}
      {...rest}
    />
  );
}
