function resolver() {
  const tipo = document.getElementById("tipo").value;
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const res = document.getElementById("resultado");

  if (isNaN(a) || isNaN(b) || (tipo === "2" && isNaN(c))) {
    res.innerHTML = "Preencha todos os campos corretamente.";
    return;
  }

  if (tipo === "1") {
    if (a === 0) {
      res.innerHTML = b === 0 ? "Infinitas soluções." : "Sem solução.";
    } else {
      const x = -b / a;
      res.innerHTML = `Solução: x = ${x}`;
    }
  } else if (tipo === "2") {
    if (a === 0) {
      // vira equação de 1º grau
      if (b === 0) {
        res.innerHTML = c === 0 ? "Infinitas soluções." : "Sem solução.";
      } else {
        const x = -c / b;
        res.innerHTML = `Solução (1º grau): x = ${x}`;
      }
    } else {
      const delta = b * b - 4 * a * c;

      if (delta < 0) {
        res.innerHTML = "Sem raízes reais.";
      } else if (delta === 0) {
        const x = -b / (2 * a);
        res.innerHTML = `Raiz única: x = ${x}`;
      } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        res.innerHTML = `Duas raízes: x₁ = ${x1}, x₂ = ${x2}`;
      }
    }
  }
}
