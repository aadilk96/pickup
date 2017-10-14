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
      image: "https://cdn.pixabay.com/photo/2017/09/22/20/54/basketball-2777016_960_720.png"
    },
    {
      title: "What is PickUp?",
      description: "Find and create pickup games near <b>you!</b>",
      image: "https://cdn.pixabay.com/photo/2013/07/12/15/41/soccer-150319_960_720.png"
    },
    {
      title: "With Who Though?",
      description: "Create <b>your team</b> and rule the streets!",
      image: "https://cdn.pixabay.com/photo/2014/04/03/10/24/volleyball-310328_960_720.png"
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
