// Valida CPF usando os digitos verificadores
export function validarCpf(cpf: string): boolean {
  const numeros = cpf.replace(/\D/g, "");

  if (numeros.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(numeros)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(numeros[i]) * (10 - i);
  }
  let dig1 = 11 - (soma % 11);
  if (dig1 >= 10) dig1 = 0;
  if (dig1 !== parseInt(numeros[9])) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(numeros[i]) * (11 - i);
  }
  let dig2 = 11 - (soma % 11);
  if (dig2 >= 10) dig2 = 0;
  if (dig2 !== parseInt(numeros[10])) return false;

  return true;
}
