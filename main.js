let request = require('request')

const url = "http://gitlab/api/v4/projects?private_token=GxL579unz_y3r3JPp8BV" // get all projects
// const url = "http://gitlab/api/v4/projects/27/users?private_token=GxL579unz_y3r3JPp8BV" // a projects users
// const url = "http://gitlab/api/v4/users/2/projects?private_token=GxL579unz_y3r3JPp8BV" // get a users projects
// const url = "http://gitlab/api/v4/projects/36/?private_token=GxL579unz_y3r3JPp8BV" // get a single project
// const url = "http://gitlab/api/v4/projects?private_token=GxL579unz_y3r3JPp8BV&user=2&name=tstingthis" // Create new project
// const url = "http://gitlab/api/v4/users?private_token=GxL579unz_y3r3JPp8BV" // get a single 

request(url, function (error, response, body) {
  const results = JSON.parse(body)
  // console.log(JSON.parse(body))
  results.map(repo => {
    // console.log(repo)
    console.log(repo.ssh_url_to_repo)
  })
});

