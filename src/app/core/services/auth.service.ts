import { User } from './../models/user.module';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire//auth';
import * as firebase from 'firebase/app';
import { Observable, of, from } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  user: Observable<User>;
  userId: string;
  constructor(public afAuth: AngularFireAuth,
              private afs: AngularFirestore) {
      //// Get auth data, then get firestore user document || null
      this.user = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            this.userId = user.uid;
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            this.userId = null;
            return of(null);
          }
        })
      );
  }

  loginWithGoogle() {
    /* const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');s
    // log event
    this.angulartics2.eventTrack.next({
      action: 'loginWithGoogle',
      properties: { category: 'authentication' },
    });
    return this.afAuth.auth.signInWithPopup(provider); */
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
}

loginWithFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider();
  return this.oAuthLogin(provider);
}

loginWithEmail(value) {
  return new Promise<any>((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(value.email, value.password)
    .then(res => {
      resolve(res);
    }, err => reject(err));
  });
}

registerWithEmail(value) {
  return new Promise<any>((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
    .then(res => {
      console.log(res);
      resolve(res);
    }, err => reject(err));
  });
}

requestPasswordReset(value): Promise<any> {
  return firebase.auth().sendPasswordResetEmail(value);
}

public oAuthLogin(provider) {
  return this.afAuth.auth.signInWithPopup(provider)
    .then((credential) => {
      this.updateUserData(credential.user);
    });
}

private updateUserData(user) {
  // set user data to firestore on login
  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

  const data: User = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    roles: null
  };
  return userRef.set(data, { merge: true });
}

  // Used by the http interceptor to set the auth header
  getUserIdToken(): Observable<string> {
    return this.afAuth.idToken;
  }

}
