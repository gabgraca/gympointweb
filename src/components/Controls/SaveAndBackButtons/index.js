import React from 'react';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Container, BackButton } from './styles';

export default function SaveAndBackButtons({ backClick, formName }) {
  return (
    <Container>
      <BackButton type="button" onClick={backClick}>
        <MdKeyboardArrowLeft />
        VOLTAR
      </BackButton>
      <button type="submit" form={formName}>
        <MdCheck />
        SALVAR
      </button>
    </Container>
  );
}

SaveAndBackButtons.propTypes = {
  backClick: PropTypes.func.isRequired,
  formName: PropTypes.string.isRequired,
};
