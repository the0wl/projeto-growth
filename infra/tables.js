class Tables{
    init(connection){
        this.connection = connection

        this.createUser()
        this.createShopping()
        this.createProduct()
    }

    createUser(){
        const sql = 'CREATE TABLE IF NOT EXISTS user (id int NOT NULL AUTO_INCREMENT, ' +
                    'name varchar(200) NOT NULL, ' +
                    'email varchar(100), ' +
                    'password varchar(100) NOT NULL, ' +
                    'PRIMARY KEY(id))'

        this.connection.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela de usuários criada com sucesso!')
            }

        })
    }

    createShopping(){
        const sql = 'CREATE TABLE IF NOT EXISTS shopping (id int NOT NULL AUTO_INCREMENT, ' +
                    'user int NOT NULL, ' +
                    'PRIMARY KEY(id), ' +
                    'CONSTRAINT fk_shopping_user FOREIGN KEY (user) REFERENCES user (id) ' +
                    ')'

        this.connection.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela de pedidos criada com sucesso!')
            }

        })
    }

    createProduct(){
        const sql = 'CREATE TABLE IF NOT EXISTS product (id int NOT NULL AUTO_INCREMENT, ' +
                    'shopping INT NOT NULL, ' +
                    'user INT NOT NULL, ' +
                    'name VARCHAR(200) NOT NULL, ' +
                    'price DECIMAL(5,2) NOT NULL, ' +
                    'link VARCHAR(300) NOT NULL, ' +
                    'PRIMARY KEY(id), ' +
                    'CONSTRAINT fk_product_shopping FOREIGN KEY (shopping) REFERENCES shopping (id), ' +
                    'CONSTRAINT fk_product_user FOREIGN KEY (user) REFERENCES user (id) ' +
                    ')'

        this.connection.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela de produtos criada com sucesso!')
            }

        })
    }


}

module.exports = new Tables