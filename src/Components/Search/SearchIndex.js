import React, { Component , useState} from 'react';
import { ReactDOM } from 'react-dom';

const things = [
  'pen', 
  'marker', 
  'eraser',
  'notebook', 
  'pencil', 
  'scissors', 
  'highlighter', 
  'stapler', 
  'paper clip',
  'binder',
  'hole punch',
  'laminator',
  'laminating sheets',
  'protective sheets',
  'index cards'
];

function SearchIndex() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = (event) => {
      const term = event.target.value
      setSearchTerm(term);
  };
  React.useEffect(() => {
      const newSearch = things.filter(value =>
          value.toLowerCase().includes(searchTerm)
          );
          setSearchResults(newSearch);
      }, [searchTerm]
  );


  return(
    <div>
        <div>
            <input 
              type="text"
              placeholder= "Enter a search term..." 
              value={searchTerm}
              onChange={handleSearch}
            />
        </div>
        <div>
            {searchResults.map(item => {
                return (
                  <div>{item}</div>
                );
            })}
        </div>      
    </div>
  );

}
export default SearchIndex;