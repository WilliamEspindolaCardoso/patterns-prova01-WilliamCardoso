class LightButton {
  render() {
    return "Botão branco criado";
  }
}

class LightWindow {
  render() {
    return "Janela clara aberta";
  }
}

class DarkButton {
  render() {
    return "Botão preto criado";
  }
}

class DarkWindow {
  render() {
    return "Janela escura aberta";
  }
}

class ThemeFactory {
  createButton() {
    throw new Error("Método abstrato deve ser implementado");
  }
  createWindow() {
    throw new Error("Método abstrato deve ser implementado");
  }
}

class LightThemeFactory extends ThemeFactory {
  createButton() {
    return new LightButton();
  }
  createWindow() {
    return new LightWindow();
  }
}

class DarkThemeFactory extends ThemeFactory {
  createButton() {
    return new DarkButton();
  }
  createWindow() {
    return new DarkWindow();
  }
}

// Cliente
const factories = {
  dark: new DarkThemeFactory(),
  light: new LightThemeFactory(),
};

class Components {
  constructor(factory) {
    this.button = factory.createButton();
    this.window = factory.createWindow();
  }

  createComponent() {
    console.log(this.button.render());
    console.log(this.window.render());
  }
}

function main() {
  const types = ["dark", "light"];

  types.forEach((type) => {
    console.log(`\n>> Fábrica selecionada: ${type} <<`);
    const factory = factories[type];
    if (!factory) throw new Error("Tipo de fábrica desconhecido");

    const components = new Components(factory);
    components.createComponent();
  });
}

main();