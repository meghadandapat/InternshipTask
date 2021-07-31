//Searchbar component
const Searchbar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="searchbar mb-3 mt-3 mr-2 d-flex">
            
        <i className="fas fa-search fa-2x mt-2 mr-2"></i>
        <input className="form-control form-control-lg"
            type="text"
            value={searchTerm}
            onChange={(e)=>{
                setSearchTerm(e.target.value)
            }}
            placeholder="Search by name, email or role" />
    </div>
    )
}
export default Searchbar;