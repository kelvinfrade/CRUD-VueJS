<template>
  <div class="listar">
    <div class="container">
      <h4 align="left">Clientes</h4>
      <br>
      <div class="text-left">
        <button type="button" class="btn btn-success">
          <router-link class="text-white" :to="{ name:'lista-adicionar' }">+ Add Cliente</router-link>
        </button>
      </div>
      <br>

      <table class="table text-left">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>TELEFONE</th>
            <th>E-MAIL</th>
            <th>CPF</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lista in listar">
            <td>{{lista.id}}</td>
            <td>{{lista.nome}}</td>
            <td>{{lista.telefone}}</td>
            <td>{{lista.email}}</td>
            <td>{{lista.cpf}}</td>
            <td>
              <a class="btn btn-warning btn-sm mr-2">
                <router-link
                  :to="{name: 'lista-editar', params:{id:lista.id}}"
                  class="text-white"
                >Editar</router-link>
              </a>
              <a
                @click.prevent="deletar(lista.id)"
                class="btn btn-danger btn-sm text-white"
                href="#"
              >Deletar</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "listar",
  mounted() {
   this.listarClientes()
  },
  data() {
    return {
      listar: []
    };
  },
  methods: {

    listarClientes(){

  axios.get("http://127.0.0.1:8000/clientes/")
  .then(resposta => {
      this.listar = resposta.data;
    });
    },

    deletar(id){

      var confirmacao = window.confirm("Deseja realmente excluir este cliente?")

      if (confirmacao) {
      axios
        .delete("http://127.0.0.1:8000/clientes/"+id+'/')
        .then((resposta) => {
          //console.log(resposta)
          this.listarClientes()
        })
      }
    }
  },
};
</script>

<style scoped>
</style>