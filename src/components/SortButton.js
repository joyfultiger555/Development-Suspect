import "../App.css"
function SortButton({sortFunction}) {
    return (
        <div className="sort">
            <button class="sortButton" onClick={sortFunction} value={"Sort"}>Sort by Age</button>
        </div>
    )
}
export default SortButton
