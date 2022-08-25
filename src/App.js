import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    buttonDisabled: true,
    hasTrunfo: false,
    trunfoCheck: false,
    isSaveButtonDisabled: true,
  };

  onInputChange = (event) => {
    const { name, type, checked, value, target } = event;
    this.setState({ [target.name]: target.type === 'checkbox'
      ? target.checked : target.value,
    }, () => this.setState({
      buttonDisabled: this.isSaveButtonDisabled(),
    }));
  };

  isSaveButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const soma = 210;
    const individual = 90;
    if (Number(cardAttr1) < 0 || Number(cardAttr1) > individual) { return true; }
    if (Number(cardAttr2) < 0 || Number(cardAttr2) > individual) { return true; }
    if (Number(cardAttr3) < 0 || Number(cardAttr3) > individual) { return true; }
    if (cardName.length === 0
      || cardDescription.length === 0
      || cardImage.length === 0
      || cardRare.length === 0) { return true; }
    return Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > soma;
  };

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
      buttonDisabled,
      hasTrunfo,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ buttonDisabled }
          onSaveButtonClick={ this.cardSave }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
