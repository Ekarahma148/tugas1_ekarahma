import { Link } from "react-router-dom";
import { CartContext } from "../App";
import { useContext } from "react";

export default function Kue(){
    const { data } = useContext(CartContext);   
return(
    <>
        <div className="grid grid-cols-2 gap-4 p-4 max-w-4xl mx-auto">
      {data.map((kue) => (
        <div key={kue.id} className="border p-2 rounded-lg shadow-md">
          <img src={kue.gambar} alt={kue.nama} className="w-full h-40 object-cover rounded" />
          <h3 className="text-lg font-semibold mt-2">{kue.nama}</h3>
          <Link to={`/resep/${kue.id}`} className="text-blue-500 text-sm mt-1">Lihat Resep</Link>
        </div>
      ))}
    </div>

    </>
);    
}