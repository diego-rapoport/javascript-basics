
class ContaBancaria {
  constructor(agencia, numero, tipo, saldo = 0) {
    this.agencia = agencia
    this.numero = numero
    this.tipo = tipo
    this._saldo = saldo
  }

  get saldo() {
    return this._saldo
  }

  set setSaldo(novoSaldo) {
    this._saldo = novoSaldo
    return this.saldo
  }

  sacar(qtd) {
    if (qtd > this.saldo) return new Error('Não há saldo suficiente')
    this.setSaldo(this.saldo - qtd)
    return qtd
  }

  depositar(qtd) {
    if (qtd <= 0) return new Error('Não é possível depositar menos ou igual a 0 reais')
    this.setSaldo(this.saldo + qtd)
    return this.saldo
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito = 0, saldo = 0) {
    super(agencia, numero, 'corrente', saldo)
    this._cartaoCredito = cartaoCredito
  }

  get cartaoCredito() {
    return this._cartaoCredito
  }

  set cartaoCredito(novoCartao) {
    this._cartaoCredito = novoCartao
    return this.cartaoCredito
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito = 0, saldo = 0) {
    super(agencia, numero, 'poupança', cartaoCredito, saldo)
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito = 0, saldo = 0) {
    super(agencia, numero, 'universitária', cartaoCredito, saldo)
  }

  sacar(qtd) {
    if (qtd > 500) throw new Error('Essa conta só pode sacar menos de R$500 por vez')
    this.saldo -= qtd
    return qtd
  }
}

module.exports = { ContaBancaria, ContaCorrente, ContaPoupanca, ContaUniversitaria }
