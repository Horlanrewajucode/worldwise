import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const navigate = useNavigate()
  return (
    <div className={styles.mapContainer} onClick={()=>{navigate("form")}}>
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
      <button onClick={() => {
        setSearchParams({lat:23, lng:50})
      }}>Change Pos</button>
    </div>
  );
}
