"use strict";

const fp = require("fastify-plugin");
const edgedb = require("edgedb");

const fastifyEdgeDb = (fastify, options, done) => {
  if (!fastify.edgedb) {
    const client = edgedb.createClient();

    if (!fastify.edgedb) {
      fastify.decorate("edgedb", client);
    }

    fastify.addHook("onClose", (fastify, done) => {
      if (fastify.edgedb === client) {
        fastify.edgedb.close();
      }
    });
  }

  done();
};

module.exports = fp(fastifyEdgeDb, { name: "fastify-edgedb" });
