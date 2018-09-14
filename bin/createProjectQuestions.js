const rp = require('request-promise')
const url = "http://gitlab/api/v4/users?private_token=GxL579unz_y3r3JPp8BV"
const users = []

// Create users list
;(async () => {
    await rp(url)
        .then((result) => {
            const data = JSON.parse(result)
            data.map((user) => {
                users.push(`${user.id}: ${user.name}`)
            })
        })
        .catch((err) => {
            console.log(err)
        })
})()

// Questions to be asked for new project.
const createProjectQuestions = [{
        type: 'list',
        name: 'user',
        message: 'User',
        choices: users
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'Project Name',
        default: 'Testing'
    }
]

module.exports = createProjectQuestions