import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

  courts: any[];
  games: any[];
  participations: any[];
  users: any[];
  visitedcounts: any[];

  constructor(public http: Http) {
    // Get all the courts
    this.http.get('./assets/courts.json').subscribe(data => {
      this.courts = JSON.parse(data['_body']);
      console.log(this.courts);
    });

    // Get all the games
    this.http.get('./assets/games.json').subscribe(data => {
      this.games = JSON.parse(data['_body']);
      console.log(this.games);
    });

    // Get all the participations
    this.http.get('./assets/participation.json').subscribe(data => {
      this.participations = JSON.parse(data['_body']);
      console.log(this.participations);
    });

    // Get all the assets
    this.http.get('./assets/users.json').subscribe(data => {
      this.users = JSON.parse(data['_body']);
      console.log(this.users);
    });

    // Get all the visited counts
    this.http.get('./assets/visitedcounts.json').subscribe(data => {
      this.visitedcounts = JSON.parse(data['_body']);
      console.log(this.visitedcounts);
    });
  }

  get_games_played_by_user(uid){
      var user_json = this.users;
      return user_json[uid]["games_played"]
  }

  get_courts_visited_by_user(uid){
    var user_json = this.users;
    return user_json[uid]["number_courts"]
  }

  get_points_for_user(uid){
    var user_json = this.users;
    return user_json[uid]["number_courts"] * user_json[uid]["games_played"]
  }

  get_top_five_players_for_court(court_id) {
      var visitedcounts = this.visitedcounts
      var players_counts = visitedcounts[court_id]
      var items = Object.keys(players_counts).map(function(key) {
        return [key, players_counts[key]];
      });

      items.sort(function(first, second) {
        return second[1] - first[1];
      });
    
      // Create a new array with only the first 5 items
      return items.slice(0, 5);
  }

  get_user_info_from_user_is(uid) {
      var user_json = this.users;
      return user_json[uid]
  }

  get_upcoming_events_for_user(uid) {
      var result = [];

      // Append the events created by the user
      var games = this.games;
      for (var i = 0; i < games.length; i++) {
          if (games[i]["creator"] == uid) {
            result.push(games[i])
          }
      }

      // Append the events which will be attended by the user
      var events = this.participations;
      for (var i = 0; i < events.length; i++) {
          var game_id = events[i];
          var end_date = new Date(games[game_id]["end_date"])
          var now = new Date();
          if (end_date > now) {
              // The date is in the future, so appent it
              result.push(games[game_id])
          }
      }
      return result
  }

  get_all_upcoming_events(uid) {
    var result = [];

    // Append the events created by the user
    var games = this.games;
    for (var i = 0; i < games.length; i++) {
        var end_date = new Date(games[i]["end_date"])
        var now = new Date();
        if (end_date > uid) {
          result.push(games[i])
        }
    }
    return result
  }

}
