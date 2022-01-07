import { useContext } from 'react'
import { songData } from "./songFeedComponents/SongData";

function Loading(props) {
  const { isLoading } = useContext(songData)
  return (
    <div className="Loading" style={isLoading === true ? {opacity: "1"} : {opacity: "0"}}>
      <div className="loading-background">
        <div className="loading_shadow-div-inset">
          <div className="loading_shadow-div-outset">
            <div className="loading-circle_shadow-div-inset">
              <div className="loading-circle_shadow-div-outset">
                <div className="loading-bubble-container">
                  <div className="bubble-traveller"></div>
                  <div className="loading-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Loading