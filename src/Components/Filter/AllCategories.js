import Filter from "./Filter"

const AllCategories=()=>{
    return(<div>
        <h1>The best electric guitars and accessories for them!</h1>
        <div className="categories">
        {['COMBO AMPLIFIER', 'ELECTRIC GUITARS', 'CASE', 'STRINGS', 'ALL'].map ((category, index)=> <Filter key={index} category={category}/>)}
        </div>
    </div>)
}
export default AllCategories