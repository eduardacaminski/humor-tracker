import { useState } from "react";


type tipohumor = 'Feliz' | 'Cansada' | 'Focada';

export default function App (){

  const [humor,sethumor] = useState <tipohumor>('Feliz');
  return (
    <div className='titulo'>
      <header>
        <h1>Meu status diário</h1>
        <p className='subtitulo'>Como você está hoje?</p>
      </header>

      <main className='status'>
      <div className='emoji'>
        {humor=='Feliz' && '🌸'}
        {humor=='Cansada' && '🍰'}
        {humor=='Focada' && '☕'}
      </div>
      <h1 > Estou me sentindo <span className='humortexto'>{humor}</span></h1>
      </main>

      <footer className='botoes'>
        <button onClick={() => sethumor('Feliz')}>🌸 Feliz</button>
        <button onClick={() => sethumor('Cansada')}>🍰 Cansada</button>
        <button onClick={() => sethumor('Focada')}>☕ Focada</button>
      </footer>
    </div>
  );
}
