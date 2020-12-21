import { ValidationError } from 'errors';


export class EnvValidation {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }

  required() {
    if (!this.value) {
      throw new ValidationError(
        `Environment variable '${this.name}' should be specified`,
      );
    }
  }

  serverPort() {
    const isPortValid = /^[3-9][0-9]{3}$/.test(this.value);

    if (!isPortValid) {
      throw new ValidationError(
        `Environment variable '${this.name}' should be a number and be between 3000 and 9999`,
      );
    }
  }

  string() {
    if (typeof this.value !== 'string') {
      throw new ValidationError(
        `Environment variable '${this.name}' should be a string`,
      );
    }
  }

  databasePort() {
    const isPortValid = /^2701[7-9]$/.test(this.value);

    if (!isPortValid) {
      throw new ValidationError(
        `Environment variable '${this.name}' should be a number and be between 27017 and 27019`,
      );
    }
  }

  redisPort() {
    const isPortValid = /^6379$/.test(this.value);

    if (!isPortValid) {
      throw new ValidationError(
        `Environment variable '${this.name}' should be a number and be 6379`,
      );
    }
  }
}
