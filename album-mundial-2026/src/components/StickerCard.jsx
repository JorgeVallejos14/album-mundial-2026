import React from 'react';

function StickerCard({ number, name, group, status }) {
  const getBackgroundColor = () => {
    switch (status) {
      case 'tengo':
        return 'green';
      case 'repetida':
        return 'yellow';
      case 'falta':
        return 'gray';
      default:
        return 'white';
    }
  };

  const cardStyle = {
    backgroundColor: getBackgroundColor(),
    padding: '10px',
    margin: '10px',
    border: '1px solid black',
    borderRadius: '5px',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <div style={cardStyle}>
      <h3>{number}</h3>
      <p>{name}</p>
      <p>{group}</p>
    </div>
  );
}

export default StickerCard;