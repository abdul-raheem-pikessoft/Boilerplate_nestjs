import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('users')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true, type: 'text' })
  refreshToken;

  @Column({ nullable: true })
  hashedRefreshToken: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
