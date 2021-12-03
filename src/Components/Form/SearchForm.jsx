export default function SearchForm({ name, handleSubmit, handleNameChange }) {
  return (
    <form aria-label="searchForm" onSubmit={handleSubmit}>
      <h3>Search a Pokemon</h3>
      <label>
        Name:
        <input
          id="pokename"
          name="name"
          type="text"
          onChange={(e) => handleNameChange(e.target.value)}
          value={name}
        />
      </label>
      <button type="submit">PokeSearch!</button>
    </form>
  );
}
