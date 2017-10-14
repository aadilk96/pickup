import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class DatabaseProvider {

  constructor(private db: AngularFireDatabase) {
    
  }

  createUser(userJson) {
    this.db.database.ref('/users/' + userJson.uid).set(userJson);
  }

  createEvent(eventJson) {
    // add event to list of events
    var x = this.db.database.ref('/events/').push(eventJson);
    x.ref.child('eid').set(x.key);
    // add event to event creation table
    var uid = eventJson.uid;
    this.db.database.ref('/event-creation/' + uid).push({
      eid: x.key,
      uid: uid
    });
  }

  deleteEvent(eid) {
    this.db.database.ref('/events/' + eid).remove();
  }
}
