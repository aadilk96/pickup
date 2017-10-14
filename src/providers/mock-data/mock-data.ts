import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MockDataProvider {

  items = [{
      title: "Tip-Off", 
      emoji: "☝",
      description: "Add your very first game.",
      expanded: false,
      unlocked: false
    },
    {
      title: "All-In", 
      emoji: "🖇",
      description: "Become part of a team.",
      expanded: false,
      unlocked: true
    },
    {
      title: "Socialite", 
      emoji: "🤙",
      description: "Have more than 15 friends.",
      expanded: false,
      unlocked: false
    },
    {
      title: "MVP", 
      emoji: "🥇",
      description: "Get a 5 star rating in a game.",
      expanded: false,
      unlocked: false
    },
    {
      title: "Legend", 
      emoji: "🏆",
      description: "Be the best player in a location.",
      expanded: false,
      unlocked: true
    }
  ];

  slides = [{
      title: "Welcome to PickUp!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

  constructor() { 
  }

  getItems() {
    return this.items;
  }

  getSlides() {
    return this.slides;
  }
}
