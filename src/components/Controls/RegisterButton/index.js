import React from 'react';
import { MdAdd } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Button } from './styles';

export default function RegisterButton({ onClick }) {
  return (
    <>
      <Button type="button" onClick={() => onClick()}>
        <MdAdd />
        CADASTRAR
      </Button>
    </>
  );
}

RegisterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
