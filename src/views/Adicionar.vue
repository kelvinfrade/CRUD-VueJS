<template>
  <div class="lista-adicionar">
    <div class="container">
      <h4 v-if="lista.id!=null" align="left">Editar Clientes</h4>
      <h4 v-else align="left">Cadastrar Clientes</h4>
      <br>
      <form action>
        <div class="text-left">
          <div class="form-group">
            <label for="add-name">Nome:*</label>
            <input class="form-control" id="add-name" v-model="lista.nome" required>
          </div>
          <div class="form-group">
            <label for="add-telefone">Telefone:*</label>
            <input class="form-control" id="add-telefone" v-model="lista.telefone" required>
          </div>
          <div class="form-group">
            <label for="add-email">E-mail:*</label>
            <input class="form-control" id="add-email" v-model="lista.email" required>
          </div>
          <div class="form-group">
            <label for="add-cpf">CPF:*</label>
            <input class="form-control" id="add-cpf" v-model="lista.cpf" required>
          </div>
          <button
            v-if="lista.id!=null"
            @click.prevent="cadastrar"
            type="button"
            class="btn btn-success mr-2"
          >Salvar</button>
          <button
            v-else
            @click.prevent="cadastrar"
            type="button"
            class="btn btn-success mr-2"
          >Cadastrar</button>
          <a class="btn btn-danger">
            <router-link class="text-white" to="/listar">Cancelar</router-link>
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "lista-adicionar",
  mounted() {
    var id = this.$route.params.id;

    if (id != null) {
      axios.get("http://127.0.0.1:8000/clientes/" + id).then(resposta => {
        this.lista = resposta.data;
      });
    }
  },
  data() {
    return {
      lista: { id: null, nome: "", telefone: "", email: "", cpf: "" }
    };
  },
  methods: {
    cadastrar() {
      var dados = {
        nome: this.lista.nome,
        telefone: this.lista.telefone,
        email: this.lista.email,
        cpf: this.lista.cpf
      };

      var router = this.$router;

      if (this.lista.id != null) {
        axios
          .put("http://127.0.0.1:8000/clientes/" + this.lista.id + "/", dados)
          .then(resposta => {
            if (resposta.statusText == "OK") {
              alert("Atualização realizada com sucesso!");
              router.push("/listar");
            } else {
              console.log("error " + resposta.data);
              alert("Erro ao editar o cliente!");
            }
          });
      } else {
        axios.post("http://127.0.0.1:8000/clientes/", dados).then(resposta => {
          if (resposta.statusText == "Created") {
            alert("Cliente cadastrado com sucesso!");
            router.push("/listar");
          } else {
            console.log("error " + resposta.data);
            alert("Erro ao cadastrar o cliente!");
          }
        });
      }
    }
  }
};
</script>

<style>
</style>