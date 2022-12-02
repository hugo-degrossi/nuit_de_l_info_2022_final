import React from 'react'
import {connect} from 'react-redux'
import TopPipeImage from "../../media/sexinfo/assets/pipe-top.png";

const Score = ({score, last_score}) => {
    return <><div style={{
        color: "white",
        fontWeight: "bold",
        marginTop: 20,
    }}>score: {score}</div>
        <div style={{
            color: "white",
            fontWeight: "bold",
            marginTop: 20,
        }}>dernier score: {last_score}</div>

        {
            last_score > 0 && score === 0
                ? <div style={{
                    color: "white",
                    background: "black",
                    margin: 20,
                    borderRadius: 20,
                    padding: 10,
                }}>
                    Pas trop dur? éviter des MST est tout aussi difficile dans la "vraie" vie, c'est pourquoi il faut se protéger :)
                </div>
                : null

        }       {
            last_score === 0 && score === 0
                ? <div style={{
                    color: "white",
                    background: "black",
                    margin: 20,
                    borderRadius: 20,
                    padding: 10,
                }}>
                    Pour jouer appuyez sur la touche "espace", elle vous servira à éviter les MST en faisant sauter votre spermatozoïde!
                </div>
                : null

        }

    </>
}

const mapStateToProps = ({score}) => ({score: score.score, last_score: score.last_score})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Score)