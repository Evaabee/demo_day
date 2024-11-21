import Button from './Button';

export default function Confirmation({ alertData, onModify }) {
  return (
    <div>
      <h1>Alert Setup Complete!</h1>
      <p>Cryptocurrency: {alertData.selectedCrypto}</p>
      <p>Alert Type: {alertData.notificationType}</p>
      <p>Threshold Value: {alertData.thresholdValue}</p>
      <p>Notification Method: {alertData.notificationMethod}</p>
      
      {/* Two buttons for actions */}
      <Button text="Modify Settings" onClick={onModify} />
      <Button text="Done" onClick={() => alert('You will be notified for changes!')} />
    </div>
  );
}
