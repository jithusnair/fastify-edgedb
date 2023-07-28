CREATE MIGRATION m14jlzkpef3bztacdm6fgxpaliyokqhpbj2oainfhnvgtyuvcrmsjq
    ONTO initial
{
  CREATE TYPE default::Person {
      CREATE REQUIRED PROPERTY name: std::str;
  };
};
