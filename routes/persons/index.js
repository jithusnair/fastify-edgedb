"use strict";

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    const allPerson = await fastify.edgedb.query("SELECT Person { id, name};");
    return {
      data: allPerson,
    };
  });
};
