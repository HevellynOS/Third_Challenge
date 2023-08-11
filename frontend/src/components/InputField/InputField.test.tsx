
import { render, fireEvent } from '@testing-library/react';
import InputField from './InputField';

test('renders InputField component', () => {
  const { getByTestId, getByText } = render(
    <InputField type="password" verifier="secret" />
  );

  const inputElement = getByTestId('input-field');
  fireEvent.change(inputElement, { target: { value: 'secret' } });

  const errorText = getByText('Passwords do not match');
  expect(errorText).toBeInTheDocument();
});
