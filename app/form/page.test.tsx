import { fireEvent, render, screen } from '@testing-library/react'
import Form from './page'

describe('Form: Validations', () => {

  it('Form: Validate title', () => {
    const componentPage = render(<Form />);
    componentPage.getByText('A stunning Form. Simple but powerful');
  });

  it('Form: Validate labels from form', () => {
    render(<Form />);

    const fullnameLabel = screen.getByText('Fullname');
    const phonenumberInput = screen.getByText('Phone Number');
    const ageLabel = screen.getByText('Age');

    expect(fullnameLabel).toBeInTheDocument();
    expect(phonenumberInput).toBeInTheDocument();
    expect(ageLabel).toBeInTheDocument();
  });

  it('Form: Validate inputs from form', () => {
    render(<Form />);

    const fullnameInput = screen.getByLabelText('Fullname');
    const phonenumberInput = screen.getByLabelText('Phone Number');
    const ageInput = screen.getByLabelText('Age');
    const submitButton = screen.getByText('Clicksito');

    // Simular la escritura de texto en los inputs
    fireEvent.change(fullnameInput, { target: { value: 'John Doe' } });
    fireEvent.change(phonenumberInput, { target: { value: '1234567890' } });
    fireEvent.change(ageInput, { target: { value: 25 } });

    // Simular el clic en el botón de submit
    fireEvent.click(submitButton);

    // Validar que los valores de los inputs sean los correctos
    expect(fullnameInput).toHaveValue('John Doe');
    expect(phonenumberInput).toHaveValue('1234567890');
    expect(ageInput).toHaveValue(25);
  });

  it('Form: Validate that age should be number', () => {
    render(<Form />);

    const ageInput = screen.getByLabelText('Age') as HTMLInputElement;
    const submitButton = screen.getByText('Clicksito');

    // Simular la escritura de texto en los inputs
    fireEvent.change(ageInput, { target: { value: 25 } });

    // Simular el clic en el botón de submit
    fireEvent.click(submitButton);

    // crear regex para validar que el valor de age sea un número
    const regex = new RegExp('^[0-9]+$');


    // Validar que el valor de age sea un número
    expect(regex.test(ageInput.value)).toBeTruthy();
  });
});