
import { useState } from 'react'
import './App.css'
import Available from './components/Available/Available'
import Banner from './components/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Selected from './components/Selected/Selected'
import Add from './components/Selected/Add'
import FooterCard from './components/Footer/FooterCard'
import Footer from './components/Footer/Footer'


function App() {

  const [selected, setSelected] = useState([]);
  const [cost, setCost] = useState(0);
  const [isActive, setIsActive] = useState({
    active: "true",
    status: "available"
  })
  

  const handleDelete = (player) =>{
    const newSeletedPlayer = selected.filter((p) => p.id != player.id);
    setSelected(newSeletedPlayer);
    setCost(cost + parseInt(player.price))
  } 

  const handleFreeCredit = () => {
    toast.success("Credit added successfully.")
    setCost(cost + 3000000);

  }
  const handleIsActiveState = (state) => {
    if (state == "available") {
      setIsActive({
        active: "true",
        status: "available"
      })
      toast.success("done")
    }
    else {
      setIsActive({
        active: "false",
        status: "selected"
      })
    }
  }


  const handleChooseSelected = player => {

    const isExist = selected.find((p) => p.id === player.id);
    console.log(isExist)
    if (selected.length < 6) {
      console.log(selected.length);
      if (!isExist) {
        if (cost < player.price) {
          toast.error("Insufficient credit");
        }
        else {
          const newSelected = [...selected, player];
          setSelected(newSelected);
          setCost(cost - player.price);
          toast.success("Successfully Added");
        }

      }
      else {
        toast.info("player already selected.");
      }

    }
    else {
      toast.error("Limit Crossed")
    }

  }


  return (
    <>
      <ToastContainer />

      <Navbar cost={cost}></Navbar>
      <Banner handleFreeCredit={handleFreeCredit}></Banner>
      <Available
        selected={selected}
        handleIsActiveState={handleIsActiveState}
        isActive={isActive}
      ></Available>
      <Players
        handleChooseSelected={handleChooseSelected}
        isActive={isActive}
      ></Players>
      <div>
        {
          selected.map((select, idx) => <Selected
            key={idx}
            select={select}
            isActive = {isActive}
            handleDelete = {handleDelete}
          ></Selected>)
        }
      </div>
      <Add isActive = {isActive}
      handleIsActiveState = {handleIsActiveState}></Add>
      <FooterCard></FooterCard>
      <Footer></Footer>
    </>
  )
}

export default App

