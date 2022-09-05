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
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
    previewOn: false,
  };

  onSaveButtonClick = (objetoInfo) => {
    this.setState((prevState) => ({
      cards: [...prevState.cards, objetoInfo],
      previewOn: true,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
    }));
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.validaInput();
      if (type !== 'checkbox') {
        this.setState({
          hasTrunfo: false,
          cardTrunfo: false,
        });
      } else {
        this.setState({
          hasTrunfo: true,
          cardTrunfo: true,
        });
      }
    });
  };

  validaInput = () => {
    const { cardName, cardDescription, cardImage, cardRare, cardAttr1, cardAttr2,
      cardAttr3 } = this.state;
    const soma = 210;
    const maximo = 90;
    if (cardName && cardDescription && cardImage && cardRare
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= soma
      && Number(cardAttr1) >= 0 && Number(cardAttr1) <= maximo
      && Number(cardAttr2) >= 0 && Number(cardAttr2) <= maximo
      && Number(cardAttr3) >= 0 && Number(cardAttr3) <= maximo) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      previewOn,
      cards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
        {
          previewOn && cards.map((element) => (<Card
            key={ element.cardName }
            cardName={ element.cardName }
            cardDescription={ element.cardDescription }
            cardImage={ element.cardImage }
            cardRare={ element.cardRare }
            cardAttr1={ element.cardAttr1 }
            cardAttr2={ element.cardAttr2 }
            cardAttr3={ element.cardAttr3 }
            cardTrunfo={ element.cardTrunfo }
            hasTrunfo={ element.hasTrunfo }
          />))
        }
      </div>
    );
  }
}
export default App;
