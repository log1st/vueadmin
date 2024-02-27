export type UnionFromArrayConst<Entity extends readonly unknown[]> =
  Entity[number];
