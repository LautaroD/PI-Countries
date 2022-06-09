import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react';
import CardPais from '../components/home/CardPais';
import { BrowserRouter } from 'react-router-dom';

describe('[========Frontend CardPais========]', () => {

  test('Renderiza correctamente lo pasado por props', () => {

    const component = render(
      <BrowserRouter>
        <CardPais name={'Argentina'} imgBandera={'Bandera.png'} continente={'South America'} />
      </BrowserRouter>
    )
    // console.log(component)
    // component.getByText('Argentina')
    expect(component.container).toHaveTextContent('South America')
  })

  // test('Comprueba si el button funciona correctamente', () => {

  //   const component = render(
  //     <BrowserRouter>
  //       <CardPais name={'Argentina'} imgBandera={'Bandera.png'} continente={'South America'} />
  //     </BrowserRouter>
  //   )
  //   const mockHandler = jest.fn();
  //   const button = component.getByText('More info')
  //   fireEvent.click(button)

  //   expect(mockHandler).toHaveBeenCalledTimes(1);
  // })
})
