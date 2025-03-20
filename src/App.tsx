import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  "1º Regra: Não pode falar 👀",
  "2º Regra: Não pode reclamar 👀",
  "Pegar o chaveiro de Santos 🔑",
  "Pegar o chaveiro de Salvador 🔑",
  "Pegar o chaveiro de Chinelo 🔑",
  "Pegar o barquinho 🛥️",
  "Tentar prender os chaveiros no barquinho 🔑🛥️",
  "Pegar a tartaruguinha 🐢",
  "Entregar o barquinho para o Luan 🛥️",
  "Entregar a tartaruguinha para o Luan 🐢",
  "Obs: Lembre das primeiras regras 👀",
  "Tentar abrir a tartaruguinha na mão do Luan 🐢",
  "Tá liberada pra falar agora 👀"
];

export default function TreasureHunt() {
  const [foundItems, setFoundItems] = useState(0);
  const [winner, setWinner] = useState(false);

  const handleFindItem = () => {
    if (foundItems < items.length - 1) {
      setFoundItems(foundItems + 1);
    } else {
      setWinner(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-purple-300 p-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center">Mestre Mandou!</h1>

          {winner && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center p-6 bg-green-500 text-white rounded-lg shadow-lg mt-4"
            >
              <h2 className="text-2xl font-bold">Parabéns!</h2>
              <p>Você completou todas as tarefas!</p>
              <p className="mt-6 rounded-sm text-lg font-medium">Será que foi SIM ou NÃO ?</p>
              <p className="mt-6 rounded-sm text-lg font-medium">Bom... De qualquer forma você já ganhou meu coração ❣️</p>
              <p className="mt-6 rounded-sm text-lg font-medium">(Foi muito Brega 👀 ? kkk)</p>
            </motion.div>
          )}

          {!winner && (
            <>
              <h2 className="text-xl text-gray-700 text-center mt-2 mb-4">
                Siga as tarefas abaixo:
              </h2>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center px-8 py-6 bg-orange-400 rounded-lg shadow-md mb-6"
              >
                <h2 className="text-2xl font-bold text-white">{items[foundItems]}</h2>
              </motion.div>
              <motion.button
                onClick={handleFindItem}
                whileTap={{ scale: 0.9 }}
                className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Marcar como concluido!
              </motion.button>
            </>
          )}
        </div>
    </div>
  );
}