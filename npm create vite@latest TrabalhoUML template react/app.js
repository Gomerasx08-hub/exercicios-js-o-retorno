import { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";

export default function App() {
  const [topic, setTopic] = useState(null);

  const topics = {
    uml: {
      title: "O que é UML (Unified Modeling Language)",
      text: `UML é uma linguagem visual padronizada usada para modelar sistemas de software. 
Ela ajuda desenvolvedores e analistas a entender, projetar e documentar o funcionamento de um sistema 
de forma clara e organizada.`,
    },
    importance: {
      title: "Importância da Modelagem na Engenharia de Software",
      text: `A modelagem permite visualizar a estrutura e o comportamento de um sistema antes da codificação, 
reduzindo erros e custos. Ela serve como guia para desenvolvedores e facilita a comunicação entre a equipe e o cliente.`,
    },
    diagrams: {
      title: "Visão Geral dos Tipos de Diagramas da UML",
      text: `A UML possui diversos tipos de diagramas, divididos em dois grupos: 
Diagramas Estruturais (como de classes e componentes) e Diagramas Comportamentais 
(como de casos de uso e sequência). Cada um tem uma função específica na representação do sistema.`,
    },
    usecases: {
      title: "Por que Usar Diagramas de Caso de Uso?",
      text: `Os Diagramas de Caso de Uso mostram as interações entre usuários (atores) e o sistema. 
Eles são essenciais para entender os requisitos e as funcionalidades esperadas, além de serem uma das formas mais simples e visuais de comunicação entre cliente e desenvolvedor.`,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-500 flex flex-col items-center justify-center p-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Modelagem de Sistemas com UML
      </h1>

      <div className="relative w-[700px] h-[400px] bg-white/10 rounded-3xl backdrop-blur-lg shadow-lg flex items-center justify-center">
        {/* Atores */}
        <motion.div
          className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-10 h-10 bg-white rounded-full mb-1" />
          <div className="w-1 h-10 bg-white" />
          <div className="w-10 h-1 bg-white" />
          <p className="mt-2 text-sm">Ator: Usuário</p>
        </motion.div>

        {/* Casos de uso */}
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {Object.keys(topics).map((key) => (
            <motion.div
              key={key}
              onClick={() => setTopic(key)}
              className="w-56 h-20 flex items-center justify-center bg-white text-gray-900 rounded-full shadow-md cursor-pointer hover:bg-yellow-200 transition-all text-center p-4 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              {topics[key].title.split("(")[0].trim()}
            </motion.div>
          ))}
        </div>

        {/* Linhas de ligação (só decorativo) */}
        <div className="absolute left-[90px] top-[200px] w-[160px] h-[2px] bg-white/60 rotate-[10deg]" />
        <div className="absolute left-[90px] bottom-[150px] w-[180px] h-[2px] bg-white/60 -rotate-[10deg]" />
      </div>

      {/* Área de texto */}
      {topic && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-white text-gray-900 rounded-2xl shadow-xl max-w-2xl p-6 text-center"
        >
          <h2 className="text-2xl font-bold mb-3">{topics[topic].title}</h2>
          <p className="text-lg leading-relaxed">{topics[topic].text}</p>
        </motion.div>
      )}
    </div>
  );
}
