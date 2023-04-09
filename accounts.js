
export class User {
  constructor(firstName, lastName, username, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
  }
}

export class Accounts {
  
  constructor() {
    this.studentAccounts = {
      mhdalimans: new User('Mhmd Ali', 'Mansour', 'mhdalimans', 'mans'),
      nourtaha: new User('Nour', 'Taha', 'nourtaha', 'nour'),
      abedsafadi: new User('Abed', 'Safadi', 'abedsafadi', 'drabedisthebest'),
      alimustafa: new User('Ali', 'Mustafa', 'alimustafa', 'ali'),
      alisaker: new User('Ali', 'Saker', 'alisaker', 'saker'),
      ayasaker: new User('Aya', 'Saker', 'ayasaker', 'aya'),
      farahsherry: new User('Farah', 'Sherry', 'farahsherry', 'farah')
    };
  }
}
