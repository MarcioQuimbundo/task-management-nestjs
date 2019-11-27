import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    const user = new User();
    user.username = username;
    user.password = password;
    await user.save();
  }
}
