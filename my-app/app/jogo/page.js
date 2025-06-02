'use client';
import { useState, useEffect } from 'react';

function gerarSenha() {
  const numeros = [];
  while (numeros.length < 5) {
    const n = Math.floor(Math.random() * 10).toString();
    if (!numeros.includes(n)) {
      numeros.push(n);
    }
  }
  return numeros;
}

export default function Jogo() {
  const [senha, setSenha] = useState([]);
  const [tentativa, setTentativa] = useState('');
  const [tentativas, setTentativas] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  useEffect(() => {
    setSenha(gerarSenha());
  }, []);

  function verificarTentativa() {
    if (tentativa.length !== 5 || new Set(tentativa).size !== 5) {
      alert('Digite 5 números únicos!');
      return;
    }

    const tentativaArr = tentativa.split('');
    let certos = 0;
    let errados = 0;

    tentativaArr.forEach((num, idx) => {
      if (senha[idx] === num) {
        certos++;
      } else if (senha.includes(num)) {
        errados++;
      }
    });

    const resultado = `${certos} certo(s) na posição | ${errados} certo(s) fora de posição`;

    const novaTentativa = {
      tentativa,
      resultado,
    };

    const novasTentativas = [novaTentativa, ...tentativas];
    setTentativas(novasTentativas);

    if (certos === 5) {
      setMensagem('🎉 Você acertou a senha!');
      setJogoFinalizado(true);
    } else if (novasTentativas.length >= 10) {
      setMensagem('❌ Você perdeu! Limite de 10 tentativas.');
      setJogoFinalizado(true);
    }

    setTentativa('');
  }

  function novoJogo() {
    setSenha(gerarSenha());
    setTentativa('');
    setTentativas([]);
    setMensagem('');
    setJogoFinalizado(false);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Jogo da Senha</h1>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={tentativa}
          maxLength={5}
          onChange={(e) => setTentativa(e.target.value.replace(/\D/g, ''))}
          disabled={jogoFinalizado}
          className="border border-gray-400 px-2 py-1 rounded"
        />
        <button
          onClick={verificarTentativa}
          disabled={jogoFinalizado}
          className="bg-blue-600 text-black px-4 py-1 rounded hover:bg-blue-700"
        >
          Tentar
        </button>
        <button
          onClick={() => alert(`Senha atual: ${senha.join('')}`)}
          className="bg-yellow-500 text-black px-4 py-1 rounded hover:bg-yellow-600"
        >
          Mostrar senha
        </button>
      </div>

      {mensagem && <p className="mb-4 text-lg font-semibold">{mensagem}</p>}

      <ul className="w-full max-w-md space-y-2">
        {tentativas.map((t, idx) => (
          <li
            key={idx}
            className="border p-2 rounded bg-gray-100 flex justify-between text-black"
          >
            <span>{t.tentativa}</span>
            <span>{t.resultado}</span>
          </li>
        ))}
      </ul>

      {jogoFinalizado && (
        <button
          onClick={novoJogo}
          className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Novo Jogo
        </button>
      )}
    </div>
  );
}
