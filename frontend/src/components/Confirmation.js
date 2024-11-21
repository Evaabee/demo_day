// frontend/src/components/Confirmation.js
import React from 'react';
import Button from './Button';

export default function Confirmation({ alertData, onModify }) {
  return (
    <div>
      <h1>Alert Setup Complete!</h1>
      <p>Cryptocurrency ID: {alertData.crypto_id}</p>
      <p>Notification Type: {alertData.notification_type}</p>
      <p>Threshold Value: {alertData.threshold_price}</p>
      <p>Notification Method: {alertData.notification_method}</p>

      {/* Two buttons for actions */}
      <Button text="Modify Settings" onClick={onModify} />
      <Button text="Done" onClick={() => alert('You will be notified for changes!')} />
    </div>
  );
}
