function SearchRow() {
    return ( 
      <div className="col-5 mb-2" style={{padding: '20px', border: '3px solid black', borderRadius: '10px', margin: 'auto'}}>
        <div className="col-6 mb-2">
          <form className="d-flex me-3" role="search" style={{marginBottom: '10px'}}>
            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск" />
            <button className="btn btn-outline-success" type="submit">Поиск</button>
          </form>
          <p>Введите название района или вид животного</p>
        </div>
      </div>
    );
}

export default SearchRow;