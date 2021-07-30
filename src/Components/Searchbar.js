const Searchbar = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="searchbar mb-3 mt-3">
        <input className="form-control form-control-lg"
            type="text"
            value={searchTerm}
            onChange={(e)=>{
                setSearchTerm(e.target.value)
            }}
            placeholder="Search Members" />
    </div>
    )
}
export default Searchbar;