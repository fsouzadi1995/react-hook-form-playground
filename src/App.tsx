import ControlledExample from './components/ControlledExample';
import Uncontrolled from './components/UncontrolledExample';

function App() {
  return (
    <main>
      <section>
        <h1>Uncontrolled</h1>
        <Uncontrolled />
      </section>

      <section>
        <h1>Controlled</h1>
        <ControlledExample />
      </section>
    </main>
  );
}

export default App;
