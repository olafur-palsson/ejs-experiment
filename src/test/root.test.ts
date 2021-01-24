import test from 'ava'
import request from 'supertest'
import { startServer } from '../server'

const app = startServer()

test('Should send html', t => {
  request(app)
    .get('/')
    .expect(200)
    .then(t.pass)
    .catch(t.fail)
})
