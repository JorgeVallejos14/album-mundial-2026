import React from 'react';
import stickers from './data/stickers';
import StickerCard from './components/StickerCard';

function App() {
  console.log('Figuritas:', stickers);

  return (
    <div>
      <h1>Álbum Mundial 2026</h1>
      <div>
        {stickers.slice(0, 5).map((sticker) => (
          <StickerCard
            key={sticker.id}
            number={sticker.id}
            name={sticker.name}
            group={sticker.team}
            status={sticker.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;