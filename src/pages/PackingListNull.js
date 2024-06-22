import React from 'react';

function Item({name, isPacked}) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>
}

export default function PackingListNull() {
  return (
    <section>
      <h1>Sally Ride Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helment with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}
