function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Nombre debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Nombre debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
  
  console.assert(
      validarNombre('1Fabricio') === 'Nombre debe contener solo letras',
      'Validar nombre no validó que el nombre sea unicamente alfabético',
  )
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad("") === "Ciudad no puede quedar vacio",
        "Validar ciudad no valido que el input no este vacio",
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo("") === "Descripcion del regalo debe tener al menos 1 caracter",
        "Validar descripcion regalo no valido que la desripcion contenga al menos un caracter",
    )

    console.assert(
        validarDescripcionRegalo("123456789012345678901234567890132456789013245678901324567890123456789012345678901234567889012345678901") ===
        "Descripcion del regalo debe tener menos de 100 caracteres",
        "Validar descripcion regalo no valido que la descripcion sea menor a 100 caracteres",
    );

    console.assert(
        validarDescripcionRegalo("Hola $123") === "Descripcion del regalo debe contener solo letras y numeros",
        "Validar descripcion regalo no valido que la descripcion contenga unicamente letras y numeros",
    )
}


probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
