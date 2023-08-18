import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from './Cart';

describe('Cart Component', () => {
  const mockCartItems = [
    { name: 'Dish 1', price: 10 },
    { name: 'Dish 2', price: 15 },
  ];

  it('renders cart items', () => {
    render(
      <Cart
        fitMeData={null}
        cartItems={mockCartItems}
        setCartItems={jest.fn()}
      />
    );

    const dish1Name = screen.getByText('Dish 1');
    const dish2Name = screen.getByText('Dish 2');

    expect(dish1Name).toBeInTheDocument();
    expect(dish2Name).toBeInTheDocument();
  });

  it('handles adding and removing items', () => {
    const setCartItems = jest.fn();

    render(
      <Cart
        fitMeData={null}
        cartItems={mockCartItems}
        setCartItems={setCartItems}
      />
    );

    const addButton = screen.getAllByText('+')[0];
    const removeButton = screen.getAllByText('-')[0];

    userEvent.click(addButton);
    userEvent.click(addButton);
    userEvent.click(removeButton);

    expect(setCartItems).toHaveBeenCalledTimes(1);
    expect(setCartItems).toHaveBeenCalledWith([
      { name: 'Dish 1', price: 10 },
      { name: 'Dish 2', price: 15 },
    ]);
  });

  it('calculates total price correctly', () => {
    render(
      <Cart
        fitMeData={null}
        cartItems={mockCartItems}
        setCartItems={jest.fn()}
      />
    );

    const totalPrice = screen.getByText('Subtotal: $25.00');
    expect(totalPrice).toBeInTheDocument();
  });

  // Add more test cases as needed
});
