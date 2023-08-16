CREATE TABLE Pedidos (
    IdPedido INT PRIMARY KEY,
    NomeCliente VARCHAR(100),
    DataHoraPedido DATETIME,
    ValorTotal DECIMAL(10,2)
);