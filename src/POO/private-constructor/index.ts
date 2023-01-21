class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  static verifyDatabase(
    host: string,
    user: string,
    password: string,
  ): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }

  connect() {
    return console.log(`${this.host}, ${this.user} ${this.password}`);
  }
}

const bd1 = Database.verifyDatabase('localhost', 'admin', '123456');
const bd2 = Database.verifyDatabase('localhost', 'admin', '654321');

console.log(bd1);
console.log(bd2);
