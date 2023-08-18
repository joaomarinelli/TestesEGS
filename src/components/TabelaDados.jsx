import React from "react";
import { useFormData } from "./FormDataContext";

const TabelaDados = () => {
  const { formData } = useFormData(); // Use o hook
  if (!formData) {
    return <div>Nenhum dado disponível.</div>;
  }

  return (
    <div className="tabela-container">
      <header className="header-table">
        <div className="logo-table">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
            alt=""
          />
        </div>
        <div className="name-table">
          Nome Completo: {formData.name} {formData.lastname}
        </div>
      </header>
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
            <td>{formData.name}</td>
            <td>{formData.lastname}</td>
            <td>{formData.birthdate}</td>
            <td>{formData.email}</td>
            <td>{formData.cpf}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelaDados;
