function SearchBar({ username, setUsername, onSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
