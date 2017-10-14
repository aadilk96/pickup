import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class DatabaseProvider {

  constructor(private db: AngularFireDatabase) {
  }

  /*
  * GET FUNCTIONS
  */

  onGetGamesPlayedByUser(uid, x) {
    this.db.database.ref('/users/' + uid + '/gamesplayed').on('value', s => {
      x(s.val());
    });
  }

  onGetCourtsVisitedByUser(uid, x) {
    this.db.database.ref('/users/' + uid + '/num_courtsvisited').on('value', s => {
      x(s.val());
    });
  }

  onGetGames(x) {
    this.db.database.ref('/games/').on('value', s => x(s));
  }
  
  onGetUser(uid, x) {
    this.db.database.ref('/users/' + uid).on('value', s => x(s));
  }

  onGetGame(gid, x) {
    this.db.database.ref('/games/' + gid).on('value', s => x(s));
  }

  onGetCourt(cid, x) {
    this.db.database.ref('/courts/' + cid).on('value', s => x(s));
  }

  /*
  * CREATE FUNCTIONS
  */

  createGameParticipation(gameId, userId, part) {

  }

  createCourt(courtJson) {
    var x = this.db.database.ref('/courts/').push(courtJson);
    x.ref.child('courtId').set(x.key);
  }

  createUser(userJson) {
    this.db.database.ref('/users/' + userJson.uid).set(userJson);
  }

  createGame(gameJson) {
    var x = this.db.database.ref('/games/').push(gameJson);
    x.ref.child('gameId').set(x.key);
    // event creation table
    var uid = gameJson.uid;
    this.db.database.ref('/game-creation/' + uid).push({
      gameId: x.key,
      userId: uid
    });
  }

  /*
  * DELETE FUNCTIONS
  */

  deleteEvent(gid) {
    this.db.database.ref('/games/' + gid).remove();
  }
}
