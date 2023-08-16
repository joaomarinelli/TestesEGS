CREATE TABLE PedidosProdutos(
    IdPedido INT,
    IdProduto INT,
    Quantidade INT,
    PRIMARY KEY (IdPedido, IdProduto),
    FOREIGN KEY (IdPedido) REFERENCES Pedidos(IdPedido),
    FOREIGN KEY (IdProduto) REFERENCES Produtos(IdProduto)
);