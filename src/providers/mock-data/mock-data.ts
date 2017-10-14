import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MockDataProvider {

  items = [{
      title: "Tip-Off", 
      emoji: "☝",
      description: "Add your very first game.",
      expanded: false
    },
    {
      title: "All-In", 
      emoji: "🖇",
      description: "Become part of a team.",
      expanded: false
    },
    {
      title: "Socialite", 
      emoji: "🤙",
      description: "Have more than 15 friends.",
      expanded: false
    },
    {
      title: "MVP", 
      emoji: "🥇",
      description: "Get a 5 star rating in a game.",
      expanded: false
    },
    {
      title: "Legend", 
      emoji: "🏆",
      description: "Be the best player in a location.",
      expanded: false
    }
  ];

  constructor() { 
  }

  getItems() {
    return this.items;
  }

}
