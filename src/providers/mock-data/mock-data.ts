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
      description: "Find, Compete, <b>Rule</b>",
      image: "assets/logo/basketball.png"
    },
    {
      title: "What is PickUp?",
      description: "Find and create pickup games near <b>you!</b>",
      image: "assets/logo/soccer.png"
    },
    {
      title: "With Who Though?",
      description: "Create <b>your team</b> and rule the streets!",
      image: "assets/logo/volleyball.png"
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
