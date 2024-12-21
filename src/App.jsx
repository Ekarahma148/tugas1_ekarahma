import {  createContext } from 'react';
import Header from './components/Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import { useState } from 'react';

export const CartContext = createContext();

function App() {
  const dataKue = [
    {
      id: 1,
      nama: "Nastar Keju",
      gambar: "https://cdn1-production-images-kly.akamaized.net/kTbKjn6H_sqfWYHYQ56uX2qtQks=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2594845/original/038073900_1546699128-resep-praktis-kue-nastar-keju-lembut-dan-gurih.jpg",
      Resep: "1. Kocok margarin dan mentega hingga lembut. 2. Tambahkan kuning telur, aduk rata. 3. Masukkan tepung terigu dan susu bubuk, uleni hingga kalis. 4. Bentuk adonan, isi dengan selai nanas. 5. Panggang pada suhu 160°C selama 25-30 menit.",
      Komposisi: ["300 gr margarin", "100 gr mentega", "100 gr gula halus", "3 butir kuning telur", "500 gr tepung terigu", "50 gr susu bubuk", "Selai nanas"]
    },
    {
      id: 2,
      nama: "Kastengel",
      gambar: "https://statik.tempo.co/data/2019/05/28/id_845165/845165_720.jpg",
      Resep: "1. Kocok margarin dan butter hingga lembut. 2. Tambahkan kuning telur, aduk rata. 3. Masukkan tepung terigu, maizena, dan keju parut. 4. Cetak sesuai selera, taburi keju cheddar. 5. Panggang pada suhu 160°C selama 20-25 menit.",
      Komposisi: ["250 gr margarin", "50 gr butter", "2 butir kuning telur", "300 gr tepung terigu", "50 gr maizena", "200 gr keju tua (parmesan/edam)", "Keju cheddar"]
    },
    {
      id: 3,
      nama: "Cookies",
      gambar: "https://cdn0-production-images-kly.akamaized.net/yOYIFEnEo8ySktUH9FPCvcFkinI=/680x383/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3131206/original/038804000_1589771006-shutterstock_1147305941.jpg",
      Resep: "1. Kocok margarin dan gula hingga lembut. 2. Tambahkan telur, aduk rata. 3. Masukkan tepung terigu, maizena, dan baking powder. 4. Tambahkan choco chips, aduk rata. 5. Panggang pada suhu 170°C selama 15-20 menit.",
      Komposisi: ["200 gr margarin", "150 gr gula halus", "1 butir telur", "300 gr tepung terigu", "50 gr maizena", "1 sdt baking powder", "100 gr choco chips"]
    },
    {
      id: 4,
      nama: "Kue Kacang",
      gambar: "https://asset.kompas.com/crops/SJbwpyw--baRfGW7dAQp_7Tk5zk=/0x127:800x661/750x500/data/photo/2023/04/13/6437abe9d1613.jpg",
      Resep: "1. Campur kacang tanah halus, tepung terigu, dan gula halus. 2. Tambahkan minyak goreng, uleni hingga kalis. 3. Cetak sesuai selera, oles dengan kuning telur. 4. Panggang pada suhu 150°C selama 20-25 menit.",
      Komposisi: ["250 gr kacang tanah sangrai", "250 gr tepung terigu", "125 gr gula halus", "125 ml minyak goreng", "1 kuning telur"]
    },
    {
      id: 5,
      nama: "Kue Lidah Kucing",
      gambar: "https://www.astronauts.id/blog/wp-content/uploads/2023/03/Resep-Kue-Lidah-Kucing-yang-Enak-Nikmat-dan-Anti-Gagal.jpg",
      Resep: "1. Kocok margarin dan gula hingga lembut. 2. Tambahkan putih telur, aduk rata. 3. Masukkan tepung terigu dan maizena. 4. Cetak memanjang menggunakan piping bag. 5. Panggang pada suhu 150°C selama 15-20 menit.",
      Komposisi: ["150 gr margarin", "100 gr gula halus", "2 putih telur", "125 gr tepung terigu", "25 gr maizena", "1 sdt vanili"]
    },
    {
      id: 6,
      nama: "Kue Semprit",
      gambar: "https://img.inews.co.id/media/600/files/inews_new/2023/04/14/Kue_semprit.jpg",
      Resep: "1. Kocok margarin dan kuning telur hingga lembut. 2. Tambahkan tepung terigu, maizena, dan susu bubuk. 3. Cetak menggunakan spuit. 4. Tambahkan choco chips di tengahnya. 5. Panggang pada suhu 160°C selama 20-25 menit.",
      Komposisi: ["200 gr margarin", "100 gr gula halus", "2 butir kuning telur", "300 gr tepung terigu", "50 gr maizena", "1 sdm susu bubuk", "Choco chips"]
    },
    {
      id: 7,
      nama: "Kue Putri Salju",
      gambar: "https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2015/07/Blog_Kreasi-Resep-Putri-Salju-Si-Manis-yang-Lembut-dan-Gurih-untuk-Lebaran.jpg",
      Resep: "1. Kocok margarin dan gula hingga lembut. 2. Tambahkan tepung terigu dan maizena. 3. Bentuk bulan sabit, panggang pada suhu 150°C selama 25 menit. 4. Gulingkan dalam gula donat saat masih hangat.",
      Komposisi: ["300 gr tepung terigu", "200 gr margarin", "50 gr gula halus", "50 gr maizena", "Gula donat"]
    },
    {
      id: 8,
      nama: "Kue Sagu",
      gambar: "https://img-global.cpcdn.com/recipes/8a260c7bcb4523aa/1200x630cq70/photo.jpg",
      Resep: "1. Sangrai tepung sagu hingga harum. 2. Kocok margarin, gula, dan kuning telur hingga lembut. 3. Tambahkan keju parut dan santan, aduk rata. 4. Masukkan tepung sagu, aduk hingga kalis. 5. Cetak dan panggang pada suhu 150°C selama 25 menit.",
      Komposisi: ["250 gr tepung sagu", "100 gr margarin", "50 gr butter", "100 gr gula halus", "1 butir kuning telur", "50 gr keju parut", "65 ml santan"]
    },
  ];

  const [data, setData] = useState(dataKue);
  return (
    <>
      <div>
      <CartContext.Provider value={{ data, setData }}>
          <Header />
          <Outlet />
          <Footer />
        </CartContext.Provider>
      </div>
    </>
  );
}

export default App;
