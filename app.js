'use strict'

import { getContatos, getContato, postContato, putContato, deleteContato } from "./contatos.js"

const novoContato = {
    "nome": "Evellyn Santiago Atualizado",
    "celular": "11 9 7171-6464",
    "foto": "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869121.jpg",
    "email": "santiagoevellyn008@gmail.com",
    "endereco": "Av. São Joaquim, 234",
    "cidade": "Itapevi Atualizado"
}

console.table( await putContato(551, novoContato))