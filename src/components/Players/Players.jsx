import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";


const Players = ({handleChooseSelected, isActive}) => {

    const [players, setPlayers] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])
    
    return (
        <div className="mt-8">

            <div className="grid grid-cols-3"> 
            {
                players.map((player, idx) => <Player 
                    key = {idx}
                    player = {player}
                    handleChooseSelected = {handleChooseSelected}
                    isActive = {isActive}
                ></Player>)
            }
            </div>
        </div>

    );
};

Players.propTypes ={
    handleChooseSelected: PropTypes.func,
    isActive: PropTypes.object
}
export default Players;