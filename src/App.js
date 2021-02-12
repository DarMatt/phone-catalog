import React, { useState, useEffect } from 'react';
import {List} from './components/List'
import './App.css';
import { Details } from './components/Details';


function App() {
  const [phonesList, setPhonesList] = useState([]);
  const [value, setValue] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const [showPhone, setShowPhone] = useState(phonesList);

  useEffect(() => {
    setShowPhone(
      phonesList.filter(phone =>
        phone.name.toLowerCase().includes(value.toLocaleLowerCase()))
    )
  }, [phonesList, value])

  useEffect(() => {
    fetch('/api/phones.json')
      .then(response => response.json())
      .then(result => {
        setPhonesList(result)
      })  
  }, [])

  const onSelectedId = (id) => {
    setSelectedId(id)
    console.log(selectedId)
  }

  const reset = () => {
    setSelectedId('')
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {!selectedId ? (
          <>
          <div className="col-md-2">
            <section>
              <p>
                  Search:
                <input
                    type="text"
                    value={value}
                    onChange={event => setValue(event.target.value.trimLeft())}
                  />
              </p>

              <p>
                Sort by:
                <select>
                  <option value="name">Alphabetical</option>
                  <option value="age">Newest</option>
                </select>
              </p>
            </section>

            <section>
              <p>Shopping Cart</p>
              <ul>
                <li>Phone 1</li>
                <li>Phone 2</li>
                <li>Phone 3</li>
              </ul>
            </section>
          </div> 
            <div className="col-md-10">
              <ul className="phones">
                {showPhone.map(phone =>(
                <List
                  phone={phone}
                  value={value}
                  onSelectedId={onSelectedId}
                />
                ))}
              </ul>
            </div>
            </>
        ) : (
            <Details
              id={selectedId}
              reset={reset}
            />
            )}
    </div>
  </div>
  );
}

export default App;
