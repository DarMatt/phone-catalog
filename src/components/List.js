import React from 'react';

export const List = ({ phone, onSelectedId }) => {

  return (

      <li className="thumbnail" key={phone.id}>
      <a
        href={`#!/phones/${phone.id}`}
        className="thumb"
        onClick={() => onSelectedId(phone.id)}
      >
        <img alt={phone.id} src={phone.imageUrl} />
      </a>

      <div className="phones__btn-buy-wrapper">
        <a className="btn btn-success" href="#buy">
          Add
        </a>
      </div>

        <a
        href={`#!/phones/${phone.id}`}
        onClick={() => onSelectedId(phone.id)}
        >
          {phone.name}
        </a>
      <p>
        {phone.snippet}
      </p>
    </li>
  )
}