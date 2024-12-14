import { Link } from "react-router-dom";
import { NameContext } from "./NameContext";
import { useContext } from "react";

function FavouriteStudent() {
    const { favstudent, setfavstudent } = useContext(NameContext);
    const {namelist,setnamelist} = useContext(NameContext);
    const {setisdisabled} = useContext(NameContext)
     
    function handleRemove(deletename) {
        setisdisabled((selectname) => ({
            ...selectname,
            [deletename]: false,
          }));
          setnamelist([...namelist])

        var remainname = favstudent.filter(function (item) {
           
            if (item === deletename) {
               return false               
            } 
            else {
                return true
            }
         })
        setfavstudent(remainname)
       

    }

    return (
<div>
        <div className="flex justify-between text-3xl font-medium p-3 bg-green-200">
            <h1 className="underline"><Link to={"/back"}>Back</Link></h1>
            <h1 className="underline">Favorite Students List</h1>
        </div>
        <div>
            <ul className="flex flex-col gap-1 p-3 text-xl">
                {favstudent.map((item, index) => (
                    <div key={index} className="flex justify-between">
                        <li>{index + 1}. {item}</li>
                        <button className="bg-black text-red-400 p-2 w-52 border rounded-md" onClick={() => handleRemove(item, index)}>Remove</button>
                    </div>
                ))}
            </ul>
        </div>
    </div>


    )
}
export default FavouriteStudent