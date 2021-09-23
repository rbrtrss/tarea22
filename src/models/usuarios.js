class Usuarios {
  constructor() {
    this.usuarios = [];
  }

  showUsuarios() {
    if (this.usuarios.length === 0) {
      return {
        usuariosExisten: false,
        error: 'No existen usuarios en el chat',
      };
    }
    return { usuariosExisten: true, usuarios: this.usuarios };
  }

  addUsuario(id, email) {
    const usuario = {
      id: id,
      email: email,
    };
    this.usuarios.push(usuario);
    return usuario;
  }

  getUsuario(id) {
    return this.usuarios.find((usuario) => usuario.id === id);
  }
}

export default new Usuarios();
