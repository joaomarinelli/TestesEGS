import React from "react";
import { useForm } from "react-hook-form";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import { useFormData } from "./FormDataContext";

const Form = () => {
  const navigate = useNavigate();
  const { updateFormData } = useFormData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    updateFormData(data);
    navigate("/tabela-dados");
  };

  return (
    <div className="container">
      <div className="form-image">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
          alt=""
        />
      </div>
      <div className="form">
        <form action="#">
          <div className="form-header">
            <div className="title">
              <h1>Teste</h1>
              <h3>EGS SISTEMAS</h3>
            </div>
          </div>
          <div className="input-group">
            <div className="form-group">
              <label>Nome</label>
              <input
                className={errors?.name && "input-error"}
                type="text"
                placeholder="Digite seu nome"
                {...register("name", {
                  required: true,
                })}
              />
              {errors?.name?.type === "required" && (
                <p className="error-message">Nome é obrigatório</p>
              )}
            </div>

            <div className="form-group">
              <label>Sobrenome</label>
              <input
                className={errors?.lastname && "input-error"}
                type="text"
                placeholder="Digite seu sobrenome"
                {...register("lastname", {
                  required: true,
                })}
              />
              {errors?.lastname?.type === "required" && (
                <p className="error-message">Sobrenome é obrigatório</p>
              )}
            </div>

            <div className="form-group">
              <label>Data de Nascimento</label>
              <input
                className={errors?.bithdate && "input-error"}
                type="date"
                placeholder="Digite sua data de nascimento"
                {...register("birthdate", {
                  required: true,
                })}
              />
            </div>

            <div className="form-group">
              <label>E-mail</label>
              <input
                className={errors?.email && "input-error"}
                type="email"
                placeholder="Seu e-mail"
                {...register("email", {
                  required: true,
                  validate: (value) => validator.isEmail(value),
                })}
              />
              {errors?.email?.type === "required" && (
                <p className="error-message">Email é obrigatório</p>
              )}
              {errors?.email?.type === "validate" && (
                <p className="error-message">Email inválido</p>
              )}
            </div>

            <div className="form-group">
              <label>CPF</label>
              <input
                className={errors?.cpf && "input-error"}
                type="text"
                placeholder="000.000.000-00"
                {...register("cpf", {
                  required: true,
                })}
              />
            </div>

            <div className="form-group">
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  name="privacy-policy"
                  {...register("privacyTerms", { required: true })}
                />
                <label>Eu aceito os termos.</label>
              </div>

              {errors?.privacyTerms?.type === "required" && (
                <p className="error-message">Necessário aceitar os termos.</p>
              )}
            </div>
          </div>
        </form>
        <div className="continue-button">
          <button onClick={() => handleSubmit(onSubmit)()}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
