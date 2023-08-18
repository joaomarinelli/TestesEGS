import React from "react";

const TabelaDados = ({ data }) => {
  if (!data) {
    return <div>Nenhum dado disponível.</div>;
  }

  return (
    <div className="tabela-container">
      <h2>Dados do Formulário</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Data de Nascimento</th>
            <th>E-mail</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.name}</td>
            <td>{data.lastname}</td>
            <td>{data.birthdate}</td>
            <td>{data.email}</td>
            <td>{data.cpf}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelaDados;
