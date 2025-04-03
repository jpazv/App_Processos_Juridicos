const getProcessos = () => {
    return [
      { id: '1', nome: 'Processo A', status: 'Em andamento', etapaAtual: 'Análise inicial' },
      { id: '2', nome: 'Processo B', status: 'Concluído', etapaAtual: 'Finalizado' },
      { id: '3', nome: 'Processo C', status: 'Em andamento', etapaAtual: 'Audiência marcada' },
    ];
  };
  
  const getDetalhesProcesso = (id) => {
    const processos = getProcessos();
    const processo = processos.find(p => p.id === id);
    
    if (processo) {
      return {
        ...processo,
        descricao: 'Detalhes sobre o andamento do processo.',
        proximaEtapa: 'Audiência final.',
      };
    }
    return null;
  };
  
  export default {
    getProcessos,
    getDetalhesProcesso,
  };
  