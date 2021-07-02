function List ({list, setList}) {

    function deleteList (e) {
       console.log(e.target)
    }


    return <ul className="ul">
       {list.map((el,idx) => {
          return(
            <div key={idx} className="list">
             <li>
                <input type="checkBox" />
                 {el}
                 <span className="times" onClick={deleteList}>
                     &times;
                 </span>
             </li>
            </div>
          )
       })}
    </ul>
}

export default List;