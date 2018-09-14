#!/usr/bin/env node

let rp = require('request-promise')
const chalk = require('chalk')
const clear = require('clear')
const inquirer = require('inquirer')
const figlet = require('figlet')

// Questions.
const initChoices = require('./initChoices')
const createProjectQuestions = require('./createProjectQuestions')

// url stuff
const token = 'private_token=GxL579unz_y3r3JPp8BV&user'
let url = `http://gitlab/api/v4/`

clear()

// Show a nice figlet on start of application.
console.log(
  chalk.yellowBright(
    figlet.textSync('GitLab CLI')
  )
)

// Show a nice description on bottom of figlet with the app description.
console.log(
  chalk.whiteBright('Welcome to Central Recovery GitLab CLI.')
)

// Prompt user with choices at start e.g (Create Project, Clone Project, etc). Run selected.
;(async () => {
    this.createproject = createproject
    this.abort = abort
    const run = await inquirer.prompt(initChoices)
    await this[run.action.toLowerCase().split(' ').join('')]()
})()

async function createproject () {
    const {user, projectName} = await inquirer.prompt(createProjectQuestions)
    
    // get userID.
    const userID = parseInt(user.charAt(0))
   
    // Create url.
    url += `projects?${token}&user=${userID}&name=${projectName}`
    createTheProject(url)
}

async function createTheProject (url) {
    const data = {}
    await rp.post(url)
        .then((result) => {
            data = JSON.parse(result)
            console.log(
                chalk.greenBright(
                    `\n Project Name: ${data.name} \n` +
                    `Owner Name: ${data.owner.name} \n`
                )
            )
        })
        .catch((err) => {
            console.log(
                chalk.redBright(err)
            )
        })
}

async function abort () {
    await console.log('aborting...')
}