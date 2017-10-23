import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public users = [
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "romain",
        "last": "hoogmoed"
      },
      "email": "romain.hoogmoed@example.com",
      "login": {
        "username": "lazyduck408",
      },
      "description": "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/83.jpg"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "ann",
        "last": "tucker"
      },
      "email": "ann.tucker@example.com",
      "description": "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/21.jpg"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "Gertrude",
        "last": "Richardson"
      },
      "email": "gertrude.richardson@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/34.jpg"
      },
      "description":"Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb."
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "Nora",
        "last": "Barrett"
      },
      "description": "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
      "email": "gertrude.richardson@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/68.jpg"
      }
    }
  ];

  removeUser(user) {
    for (let i = 0, max = this.users.length; i < max; i++) {

      if (user.name === this.users[i].name) {
        this.users.splice(i, 1);
        return;
      }

    }
  }
}
