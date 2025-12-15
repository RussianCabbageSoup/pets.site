function SearchRow() {
    return ( 
      <form className="d-flex me-3" role="search" style={{margin: '40px'}}>
        <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск" />
        <button className="btn btn-outline-success" type="submit">Поиск</button>
      </form>
    );
}

export default SearchRow;