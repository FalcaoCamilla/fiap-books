'use client'

import Button from "./components/button";
import Header from "./components/header";
import Input from "./components/input";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center bg-black-800 w-[100vw] h-[100vh]">
      <Header/>
      <div className="flex flex-col justify-center items-center w-[100vw]">
        <p className="mb-2 text-pink-900 font-sans font-bold text-4xl">
          Fiap Books
        </p>
        <div className="flex flex-1 flex-col border border-[#000] border-op70 min-w-[996px] min-h-[355px] rounded-[25px] justify-center items-center">
          <Input label="Digite o nome do livro"/>
          <Input label="Digite a editora do livro"/>
          
          <div className="flex justify-around w-full">
            <Button nameButton="Listar livros"/>
            <Button nameButton="Cadastrar livro"/>
          </div>
        </div>
      </div>
    </main>
  );
}
