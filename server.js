'use strict';

const cors = require('cors');
const pg = require('pg');
const express = require('express');
const app = express();

const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

const client = new pg.Client (process.env.DATABASE_URL);