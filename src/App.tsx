import React from 'react';
import './styles/App.css';
import { Icon44LogoVk } from "@vkontakte/icons";
import WhenForm from "./components/WhenForm";
import WhereForm from "./components/WhereForm";
import FormElement from "./components/FormElement";
import {Button, Flex, Textarea} from "@chakra-ui/react";

const App:React.FC = () => {
  return (
      <div className={'main-box'}>
          <main className={'inside-box'}>
              <div className={'inside-box-header box-element'}>
                  <h1>Забронировать переговорку</h1>
                  <Icon44LogoVk width={55} height={55} color={'#0077ff'} />
              </div>
              <section className={'box-element'}>
                  <WhenForm />
              </section>
              <section className={'box-element'}>
                  <WhereForm />
              </section>
              <section className={'box-element'}>
                  <h2 style={{marginBottom: '10px'}}>Сущность</h2>
                  <FormElement label={'Комментарий'}>
                      <Textarea placeholder='Напишите о целях встречи' />
                  </FormElement>
                  <Flex flexDirection={'row'} justifyContent={'space-between'}>
                      <Button colorScheme={'red'} variant={'outline'}>Очистить</Button>
                      <Button bg={'#0077ff'} color={'#ffffff'}>Забронировать</Button>
                  </Flex>
              </section>
          </main>
      </div>
  );
}

export default App;
