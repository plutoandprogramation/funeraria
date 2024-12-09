const {Client} = require('pg');
const express = require('express')
const app = express()
const port = 3000
// Configaração das credenciais
const cliet = new Client({
    user: 'postgres',
    host: 'localhost',
    database:'postgres',
    password: '123mudar',
    port: 5432 //Porta padrão do PostreSQL
});

//Conectar ao banco de dados
Client.connect();

async function inserirServico(servico, valor) {
    try {
      await client.query('INSERT INTO tab_servico (desc_servico,valor_servico) VALUES ($1, $2)', [servico, valor]);
      console.log('Serviço inserido com sucesso!');
    } catch (err) {
      console.error('Erro ao inserir cliente:', err);
    }
  }
  
  inserirServico('Coroa de flores e escrita personalizada', 500);
  
  async function inserirCarro(carro,modelo,data_saida,hora_saida,data_chegada,hora_chegada) {
    try {
        const sql = 'INSERT INTO tab_carro (placa_carro,modelo_carro,data_saida,hora_saida,data_chegada,hora_chegada) VALUES ($1, $2, $3, $4, $5, $6)'
        const values = [carro,modelo,data_saida,hora_saida,data_chegada,hora_chegada]
        await client.query(sql, values);
        await client.end()
        console.log('Serviço inserido com sucesso!');
    } catch (err) {
        console.error('Erro ao inserir cliente:', err);
    }
  }
  
  inserirCarro('Van', 'Chevrolet Express','05/12/2024','14:30','05/12/2024','15:00');

  
  async function inserirCliente(nome,fone,cpf,email,plano) {
    try {
        const sql = 'INSERT INTO tab_cliente (nome_cliente,fone_cliente,cpf_cliente,email_cliente,plano_funerario_id,senha_cliente) VALUES ($1, $2, $3, $4, $5,$6)'
        const values = [nome,fone,cpf,email,plano,senha]
        await client.query(sql, values);
        await client.end()
        console.log('Serviço inserido com sucesso!');
    } catch (err) {
        console.error('Erro ao inserir cliente:', err);
    }
  }
  
  inserirCarro('', '');
  
  async function inserirFonecedor(nome,endereco,email,fone) {
    try {
        const sql = 'INSERT INTO tab_carro (nome_fornecedor,enderoco_fornecedor,email_fornecedor,fone_fornecedor) VALUES ($1, $2, $3, $4, $5, $6)'
        const values = [nome,endereco,email,fone]
        await client.query(sql, values);
        await client.end()
        console.log('Serviço inserido com sucesso!');
    } catch (err) {
        console.error('Erro ao inserir cliente:', err);
    }
  }
  
  inserirCarro('', '');
  
  async function inserirPlano(simples,padrao,premium) {
    try{
      const sql = 'INSERT INTO tab_plano (plano_simples,plano_padrao,plano_premium VALUES ($1, $2, $3)'
      const values = [simples,padrao,premium]
      await client.query(sql,values);
      await client.end()
      console.log('Serviço inserido com sucesso!');
    } catch(err) {
      console.error('Erro ao inserir cliente:',err);
    }
  }
  
  async function inserirCorpo(sexo,nome,data_nacimento,carro) {
    try{
      const sql = 'INSERT INTO tab_corpo (sexo_corpo, nome_corpo, data_nacimento_corpo,carro_id VALUES ($1, $2, $3, $4)'
      const values = [sexo,nome,data_nacimento,carro]
      await client.query(sql,values);
      await client.end()
      console.log('Serviço inserido com sucesso!');
    } catch(err){
      console.error('error ao inserir dados')
    }
  }
  
  async function inserirProduto(descricao,valor) {
    try{
      const sql = 'INSERT INTO tab_produto (desc_produto, valor_produto) VALUES ($1, $2)'
      const values = [descricao,valor]
      await client.query(sql,values);
      await client.end()
      console.log('Dados foram inseridos');
    } catch(err){
      console.error('Não foi inserido dados')
    }
  }
  
  async function inserirEstoque(produto,quantidade) {
    try{
      const sql = 'INSERT INTO tab_estoque (produto_id,quantidade_produto) VALUES ($1, $2)'
      const values = [produto,quantidade]
      await client.query(sql,values);
      await client.end()
      console.log('Dados foram inseridos')
    } catch(err){
      console.error('Não foi inserido')
    }
  }
  
  async function inserirDocumentacao(cliente,plano,corpo,carro,servicos,servicos_plus) {
    try{
      const sql = 'INSERT INTO tab_estoque (cliente_id,plano_funerario,corpo_id,carro_id,servicos_id,servicos_complemetares_id) VALUES ($1, $2, $3, $4, $5, $6)'
      const values = [cliente,plano,corpo,carro,servicos,servicos_plus]
      await client.query(sql,values);
      await client.end()
      console.log('Dados foram inseridos')
    } catch(err){
      console.error('Não foi inserido')
    }
  }

  function onFormSubmit(e) {
    e.preventDefault()
    var nome = document.getElementById.value
    var cpf = document.getElementById.value
    var email = document.getElementById.value
    var senha = document.getElementById.value

    inserirCliente(nome,fone,cpf,email,plano,senha)
}
  