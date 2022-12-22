const core = require('@actions/core');

async function run() {
  try {
    console.log("hello");
  } catch (error) {
    core.setFailed(JSON.stringify(error));
  }
}

run();