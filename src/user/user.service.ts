import {Injectable} from "@nestjs/common";

@Injectable()
export class UserService {
  private users: any[] = [];
  find() {
    return this.users;
  }
  create(userData: any) {
    this.users.push(userData);
  }
  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
