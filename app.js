'use strict'

import {
    getContatos,
    postContato
} from './contatos.js'

const tabela = document.getElementById('listaContatos')

const nome = document.getElementById('nome')
const celular = document.getElementById('celular')
const email = document.getElementById('email')
const endereco = document.getElementById('endereco')
const cidade = document.getElementById('cidade')

const botao = document.getElementById('salvar')

async function carregarContatos(){

    const contatos = await getContatos()

    tabela.innerHTML = ''

    contatos.forEach(contato => {

        tabela.innerHTML += `
        
            <tr>

                <td>${contato.id}</td>
                <td>${contato.nome}</td>
                <td>${contato.celular}</td>
                <td>${contato.email}</td>
                <td>${contato.endereco}</td>
                <td>${contato.cidade}</td>

            </tr>

        `
    })
}

async function salvarContato(){

    const novoContato = {

        nome: nome.value,
        celular: celular.value,
        email: email.value,
        endereco: endereco.value,
        cidade: cidade.value

    }

    await postContato(novoContato)

    carregarContatos()

    nome.value = ''
    celular.value = ''
    email.value = ''
    endereco.value = ''
    cidade.value = ''
}

botao.addEventListener('click', salvarContato)

carregarContatos()

