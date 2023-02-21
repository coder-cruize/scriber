import getDeviceSupport from "../../utils/deviceSupport";
import NoteBook from "../notebook";
import "./style.css";

export default function Demo() {
  const deviceSupport = getDeviceSupport();
  const initNotebookData = [];
  return (
    <section className="customDemo">
      <div className="card">
        <NoteBook size={350} init={initNotebookData} />
      </div>
      <div className="deviceSupport">
        Your device <span style={deviceSupport.style}>Fully</span> supports
        Scribers software.
      </div>
    </section>
  );
}
