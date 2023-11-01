import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';

function PaymentOptions() {
  const [paymentMethod, setPaymentMethod] = useState('creditCard'); // Default payment method

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <Typography variant="h6">Payment Method</Typography>
      <RadioGroup
        aria-label="payment-method"
        name="payment-method"
        value={paymentMethod}
        onChange={handlePaymentChange}
      >
        {/* <FormControlLabel
          value="creditCard"
          control={<Radio />}
          label="Credit Card"
        />
        <FormControlLabel
          value="paypal"
          control={<Radio />}
          label="PayPal"
        /> */}
        <FormControlLabel
          value="cashOnDelivery"
          control={<Radio />}
          label="Cash on Delivery"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default PaymentOptions;
