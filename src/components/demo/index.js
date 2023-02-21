import NoteBook from "../notebook";
import "./style.css";

export default function Demo() {
  const initNotebookData = [];
  return (
    <section className="customDemo">
      <div className="card">
        <NoteBook size={350} init={initNotebookData} />
      </div>
    </section>
  );
}
