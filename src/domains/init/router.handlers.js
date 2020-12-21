// Core
import axios from 'axios';
import dg from 'debug';
// Instruments
import { redisClient } from 'databases/redis';


const debug = dg('router:init');

/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - init
 *     summary: Init endpoint
 *     description: >
 *       Init endpoint
 *     responses:
 *       200:
 *         description: Hello from API
 *     content:
 *       text/html:
 *         schema:
 *           type: string
 *           examples:
 *             html:
 *               summary: Some html
 *               value: '<h1>Hello from API =)</h1>'
 */
export const get = async (req, res) => {
  debug(`${req.method} — ${req.originalUrl}`);

  try {
    res.status(200).send('<h1>Hello from API =)</h1>');
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

/**
 * @swagger
 * /repos/{username}:
 *   get:
 *     tags:
 *       - github
 *     summary: Get repos name
 *     description: >
 *       Get repos name
 *     responses:
 *       200:
 *         description: >
 *           Repo from github.com
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *               example:
 *                 id: 1
 *                 name: John Smith
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: Username from github.com
 */
export const getReposNumber = async (req, res) => {
  debug(`${req.method} — ${req.originalUrl}`);

  try {
    const { username } = req.params;
    const { data } = await axios.get(`https://api.github.com/users/${username}`);
    redisClient.setex(username, 5, JSON.stringify(data));
    res.status(200).send({ data });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
