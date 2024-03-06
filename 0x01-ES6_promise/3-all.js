import { uploadPhoto, createUser } from "./utils.js";

function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()])
        .then(results => {
            console.log(`${results[0].body} ${results[1].firstName} ${results[0].lastName}`);
        })
        .catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
