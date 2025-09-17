class Button {
  render() {}
}

class WindowUI {
  render() {}
}

class LightButton extends Button {
  render() {
    return "Botão branco criado";
  }
}

class LightWindow extends WindowUI {
  render() {
    return "Janela clara aberta";
  }
}

class DarkButton extends Button {
  render() {
    return "Botão preto criado";
  }
}

class DarkWindow extends WindowUI {
  render() {
    return "Janela escura aberta";
  }
}

class ThemeFactory {
  createButton() {}
  createWindow() {}
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

function main(factory) {
  const button = factory.createButton();
  const windowUI = factory.createWindow();

  console.log(button.render());
  console.log(windowUI.render());
}

console.log("### Tema Light ###");
main(new LightThemeFactory());

console.log("### Tema Dark ###");
main(new DarkThemeFactory());