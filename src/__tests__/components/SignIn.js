import React from 'react';
import { SignInContainer } from '../../components/SignIn';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

describe('SignIn', () => {
    describe('SignInContainer', () => {
      it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
        // render the SignInContainer component, fill the text inputs and press the submit button
        const handleSubmit = jest.fn();
        const { getByPlaceholderText, getByText } = render(<SignInContainer handleSubmit={handleSubmit} />);

        fireEvent.changeText(getByPlaceholderText('Username'), 'kalle');
        fireEvent.changeText(getByPlaceholderText('Password'), 'password');
        fireEvent.press(getByText('Sign In'));

        await waitFor(() => {
          // expect the handleSubmit function to have been called once and with a correct first argument
          expect(handleSubmit).toHaveBeenCalledTimes(1);
          expect(handleSubmit.mock.calls[0][0]).toEqual({
            username: 'kalle',
            password: 'password',
          });
        });
      });
    });
  });