import React from 'react';
import './styles/App.css';
import { Icon44LogoVk } from "@vkontakte/icons";
import BookingForm from "./components/BookingForm";

const App:React.FC = () => {
  return (
      <div className={'main-box'}>
          <div className={'inside-box'}>
              <div className={'inside-box-header box-element'}>
                  <h1>Забронировать переговорку</h1>
                  <Icon44LogoVk width={55} height={55} color={'#0077ff'} />
              </div>
              <main className={'box-element'}>
                <BookingForm />
              </main>
          </div>
      </div>
  );
}

export default App;
