import React from 'react';
import './styles/App.css';
import BookingForm from "./components/BookingForm";

const App:React.FC = () => {
  return (
      <main>
          <h1 className={'main-header'}>Забронировать переговорку</h1>
          <section>
            <BookingForm />
          </section>
      </main>
  );
}

export default App;
