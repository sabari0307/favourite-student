import { Link } from "react-router-dom";
import { NameContext } from "./NameContext";
import { useContext } from "react";


function StudentList() {
  

  const { favstudent, setfavstudent } = useContext(NameContext);
  const {namelist} = useContext(NameContext)
   const {isdisabled,setisdisabled} = useContext(NameContext)
  

  function handleAdd(favname)
   {
    setisdisabled((selectname) => ({
      ...selectname,
      [favname]: true,
    }));
   // setisdisabled(true)
    setfavstudent([...favstudent, favname]); // Add to favorite list
    
  }

  return (
    <div>
      <div className="flex justify-between bg-red-200 p-3">
        <p className="text-3xl font-medium underline">
          <Link to={"/"}>List of Students</Link>
        </p>
        <p className="text-3xl font-medium underline">
          <Link to={"/favourite"}>Favourite Students</Link>
        </p>
      </div>
      <div>
        <ul className="flex flex-col gap-1 p-3 text-xl">
          {namelist.map((item, index) => (
            <div key={index} className="flex justify-between">
              <li>{index + 1}. {item}</li>
              <button
                onClick={() => handleAdd(item, index)} 
                disabled={isdisabled[item]}  // Disable if already clicked
                className="bg-red-300 p-2 w-52 border rounded-md">
                {isdisabled[item] ? "Added" : "Add to Favourite"}
              </button>
            </div>
))}
</ul>
</div></div>
  )
}
export default StudentList
