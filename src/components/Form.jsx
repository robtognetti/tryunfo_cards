import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <main>
        <h1>Adicionar nova carta</h1>
        <form action="">
          <label htmlFor="cardName">
            Nome
            <input
              type="text"
              data-testid="name-input"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardDescription">
            <textarea
              name="cardDescription"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr1">
            Attr01
            <input
              type="number"
              data-testid="attr1-input"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr2">
            Attr02
            <input
              type="number"
              data-testid="attr2-input"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr3">
            Attr03
            <input
              type="number"
              data-testid="attr3-input"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardImage">
            Imagem:
            <input
              type="text"
              data-testid="image-input"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardRare">
            Raridade:
            <select
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <label htmlFor="cardTrunfo">
            Super Trunfo
            <input
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            className="saveButton"
          >
            Salvar
          </button>
        </form>
      </main>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
