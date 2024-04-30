import { useEffect, useState } from "react";
import Header from "./components/Header";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import { useDispatch } from "react-redux";
import { getFlight } from "./redux/actions/flightActions";
import Modal from "./components/Modal";


function App() {
  const [isMapView, setIsMapView] = useState(true); // harita görünümünde miyiz?
  const [isOpen,setIsOpen] = useState(false);
  const [detailId, setDetailId] = useState(null);

  // modalı açar
  const openModal = (id) => {
    setDetailId(id); // hangi uçak için açıldığının state'i
    setIsOpen(true); // modal'ı açar 
  };

  // modalı kapatır
  const closeModal = () => {
    setDetailId(null);
    setIsOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlight());
  },[])
  return (
    <>
      <Header />
      <div className="view-buttons">
        <button 
        className={isMapView ? 'active' : ''} 
        onClick={() => setIsMapView(true)}
        >
          Harita Görünümü
        </button>
        <button 
        className={!isMapView ? 'active' : ''} 
        onClick={() => setIsMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>

      {/* hangi bileşenin ekrana geleceğini belirleme */}
      {isMapView ? <MapView openModal={openModal} /> : <ListView openModal={openModal} />}

      {/* modal bileşeni */}
      {isOpen && <Modal detailId={detailId} closeModal={closeModal} />}

    </>
  )
}

export default App;
