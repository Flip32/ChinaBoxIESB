<h1 align="center" >api-chine-box-pos</h1>

## Desenvolvedores
- Filipe Lopes
- Luiz Resplande
- Natan Farias

<hr>

## Tecnologias

- Javascript
- NodeJs
- Express
- MongoDB
- Mongoose
- Azure 

<hr>

## Demonstração da Aplicação

- <a href="https://chinaboxiesb.azurewebsites.net" >Aplicação em Produção na Azure</a>

<hr>

## Instruções

- Para baixar o projeto, abra o terminal na pasta onde queira fazer o download e, com o git instalado, execute o comando ``git clone https://github.com/Flip32/ChinaBoxIESB`` .

- Na pasta raiz do projeto, crie um arquivo ``.env`` seguindo o modelo do arquivo <a href="https://github.com/Flip32/ChinaBoxIESB/blob/master/.envExemple">.envExample</a> e substitua ``<user>`` e ``<password>`` por suas credenciais do mongoDB.

- Abra o terminal na pasta raiz do projeto e execute o comando ``yarn dev`` para executar o projeto em localhost.
    
    - Se não tiver o <a href="https://classic.yarnpkg.com/en/docs/install/#windows-stable" >yarn</a> instalado na sua máquina, execute o comando ``npm install --global yarn`` para instalar o yarn.

- Abra o Insomnia para visualizar as requisições

    - <h2>Produtos</h2> 
    
        - Listar todos os Produtos
            ```
            - GET: /produtos/
            ```

        - Gravar um Produto
            ```
            - POST: /produtos/

            Parâmetro:

                -> body:
                    {
                        "task": {
                            "nome": "string",
                            "preco": 0,
                            "descricao": "string",
                            "imagem": "string",
                            "permiteAlteracao": false
                        }
                    }

            ```

        - Listar um Produto
            ```
            -GET: /produtos/{id}

            Parâmetro:

                -> id: Number
            ```

        - Deletar um Produto
            ```
            -DELETE: /produtos/{id}

            Parâmetro:

                -> id: Number
            ```

        - Atualizar um Produto
            ```
            -PATCH: /produtos/{id}

            Parâmetros:

                -> id: Number

                -> body:
                    {
                        "task": {
                            "nome": "string",
                            "preco": 0,
                            "descricao": "string",
                            "imagem": "string",
                            "permiteAlteracao": false
                        }
                    }
            ```

    - <h2>Pedidos</h2> 

        - Listar todos os Pedidos
            ```
            - GET: /pedidos/
            ```

        - Gravar um pedido
            ```
            - POST: /pedidos/

            Parâmetro:

                -> body:
                    {
                        "task": {
                            "produtos": {
                                "id": "string",
                                "qnt": "string",
                                "comentario": "string"
                            },
                            "clienteNome": "string",
                            "ativo": true
                        }
                    }
            ```

        - Listar um pedido
            ```
            - GET: /pedidos/{id}

            Parâmetro:

                -> id: Number
            ```

        - Deletar um pedido
            ```
            - DELETE: /pedidos/{id}

            Parâmetro:

                -> id: Number
            ```