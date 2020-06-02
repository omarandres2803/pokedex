import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  pokemons = [
    {
      name: "Pikachu",
      url: "https://image.flaticon.com/icons/svg/188/188987.svg"
    },
    {
      name: "Bulbasur",
      url: "https://image.flaticon.com/icons/svg/188/188989.svg"
    },
    {
      name: "Charmander",
      url: "https://image.flaticon.com/icons/svg/188/188990.svg"
    },
    {
      name: "Snorlax",
      url: "https://image.flaticon.com/icons/svg/189/189001.svg"
    },
    {
      name: "Eevee",
      url: "https://image.flaticon.com/icons/svg/188/188995.svg"
    },
    {
      name: "Squirtle",
      url: "https://image.flaticon.com/icons/svg/188/188988.svg"
    },
    {
      name: "Meowth",
      url: "https://image.flaticon.com/icons/svg/188/188997.svg"
    },
    {
      name: "Psyduck",
      url: "https://image.flaticon.com/icons/svg/189/189000.svg"
    },
    {
      name: "Jigglypuff",
      url: "https://image.flaticon.com/icons/svg/188/188993.svg"
    }
  ];

  modalInfo = {
    name: "",
    url: ""
  };

  constructor() {}

  ngOnInit(): void {}

  setModalInfo(e) {
    this.modalInfo.name = e.name;
    this.modalInfo.url = e.url;
  }
}
