import { faker } from "@faker-js/faker";

const USERS_LIMIT = 10000;

export const users = Array.from(Array(USERS_LIMIT), () => {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    job: faker.name.jobTitle(),
    avatar: faker.image.avatar(),
    background: faker.image.nature(),
  };
});
