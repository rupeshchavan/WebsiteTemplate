class Greeter
{
  greeting: string
  constructor(message: string)
  {
    this.greeting=message;
  }
  greet()
  {
    return "Hello "+this.message;
  }
}

let greeter = new Greeter("Rupesh"):
let button = document.CreateElement('button');
button.textContent = "Say Hello";

document.body.appendChild(button);
