
import { render, fireEvent, waitFor } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('renders without crashing', () => {
    render(
      <Button
        text="Click me"
        click={async () => {}}
        color="white"
        backgroundcolor="blue"
        width="100px"
        height="40px"
        radius="5px"
      />
    );
  });

  it('calls click handler when clicked', async () => {
    const clickMock = jest.fn(async () => {});

    const { getByText } = render(
      <Button
        text="Click me"
        click={clickMock}
        color="white"
        backgroundcolor="blue"
        width="100px"
        height="40px"
        radius="5px"
      />
    );

    const button = getByText('Click me');
    fireEvent.click(button);

    await waitFor(() => {
      expect(clickMock).toHaveBeenCalled();
    });
  });
});
