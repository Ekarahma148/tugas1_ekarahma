import { useParams } from "react-router-dom";
import { CartContext } from "../App.jsx";
import { useContext } from "react";

function RecipeDetail ()  {
  const { id } = useParams();
  console.log("ID dari URL:", id); // Debugging
  const { data } = useContext(CartContext); 
    const kue = data.find((item) => item.id === parseInt(id));
  console.log("Data kue yang ditemukan:", kue); // Debugging

  if (!kue) {
    return <p>Kue tidak ditemukan!</p>;
  }
    return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{kue.nama}</h2>
      <img src={kue.gambar} alt={kue.nama} className="w-full h-60 object-cover rounded mb-4" />
      <h3 className="text-xl font-semibold">Resep:</h3>
      <p className="whitespace-pre-line mb-4">{kue.Resep}</p>
      <h3 className="text-xl font-semibold">Komposisi:</h3>
      <ul className="list-disc ml-5">
        {kue.Komposisi.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;
