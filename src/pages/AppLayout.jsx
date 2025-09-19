import Map from "../components/Map";
import SideBar from "../components/Sidebar";
import User from "../components/User";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={`${styles.app} flex flex-col md:flex-row`}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}
