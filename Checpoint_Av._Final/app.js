const Aluno = require('./Alunos')

function Curso (nome, nota, faltasM, listaAlunos = []) {
  this.nome = nome
  this.nota = nota
  this.faltasM = faltasM
  this.listaAlunos = listaAlunos

  this.adicionarAluno = (nome, faltas, notas) => {
    this.listaAlunos.push(new Aluno(nome, faltas, notas))
  }

  this.resultado = nome => {
    let aluno = this.listaAlunos.find(x => x.nome === nome)
    return (
      (aluno.calcularMedia >= this.nota &&
        aluno.faltas < this.faltasM) ||
        (aluno.faltas === this.faltasM &&
        aluno.calcularMedia >= this.nota * 1.1)
    )
  }

  this.listaAprovados = () => {
    return this.listaAlunos.map(item => {
      return (
        (item.calcularMedia >= this.nota &&
          item.faltas < this.faltasM) ||
        (item.faltas === this.faltasM &&
          item.calcularMedia >= this.nota * 1.1)
      )
    })
  }
}

module.exports = Curso