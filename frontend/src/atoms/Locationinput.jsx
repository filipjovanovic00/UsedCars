import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

export default function Locationinput(){
  const [address, setAddress] = useState('');

  const handleSelect = (selectedAddress) => {
    setAddress(selectedAddress);
  };

  return (
    <div>
      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: 'Enter your location' })} />
            <div>
              {loading ? <div>Loading...</div> : null}
              {suggestions.map((suggestion, index) => {
                const style = {
                  backgroundColor: suggestion.active ? '#f2f2f2' : '#ffffff'
                };
                return (
                  <div key={index} {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}

