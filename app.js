'use strict';

const app = require('express')()
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
   try {
        res.status(200).send({
            message: 'Welcome to technical challenge, please see /version for application information'
        })
    } catch (err) {
        res.status(400).send(err) 
   }
})

// status page
app.get('/version', (req, res) => {

    try {
        let output = {
            myapplication: [
	        {
                "version": process.env.APP_VERSION,
		"lastcommitssha": process.env.GIT_COMMIT,
                "description": 'pre-interview technical test'
            }
	  ]
        }
        res.status(200).send(output)
    } catch (err) {
        res.status(400).send(err)
    }
})

const server = app.listen(port, () => {
 console.log(`Server listening on the port: ${port}`)
})

module.exports = server
