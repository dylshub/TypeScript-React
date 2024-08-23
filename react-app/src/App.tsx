import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "Tankiro", "Eren"];
  return (
    <Card>
      <CardBody title="Hola dylan" text="este es el texto" />
      <List data={list} />
    </Card>
  );
}

export default App;
