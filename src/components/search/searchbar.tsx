import React, { useState } from 'react';

interface SearchBarProps {
  onSubmit: (searchTerm1: string, searchTerm2: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [titleSearch, setTitleSearch] = useState<string>('');
  const [descriptionSearch, setDescriptionSearch] = useState<string>('');

  const handleSearch = async () => {
    await onSubmit(titleSearch, descriptionSearch);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={titleSearch}
        onChange={(e) => setTitleSearch(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={descriptionSearch}
        onChange={(e) => setDescriptionSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
