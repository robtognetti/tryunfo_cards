import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <main>
        <h1>Adicionar nova carta</h1>
        <form action="">
          <label htmlFor="cardName">
            Nome
            <input type="text" data-testid="name-input" name="cardName" />
          </label>

          <label htmlFor="cardDescription">
            <textarea name="cardDescription" data-testid="description-input" />
          </label>

          <label htmlFor="cardAttr1">
            Attr01
            <input type="number" data-testid="attr1-input" name="cardAttr1" />
          </label>

          <label htmlFor="cardAttr2">
            Attr02
            <input type="number" data-testid="attr2-input" name="cardAttr2" />
          </label>

          <label htmlFor="cardAttr3">
            Attr03
            <input type="number" data-testid="attr3-input" name="cardAttr3" />
          </label>

          <label htmlFor="cardImage">
            Imagem:
            <input type="text" data-testid="image-input" name="cardImage" />
          </label>

          <label htmlFor="cardRare">
            Raridade:
            <select data-testid="rare-input" name="cardRare">
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
            />
          </label>
          <button
            type="submit"
            data-testid="save-button"
            className="saveButton"
          >
            Salvar
          </button>
        </form>
      </main>
    );
  }
}

export default Form;
