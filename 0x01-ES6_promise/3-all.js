// 3-all.js

import uploadPhoto from "./utils.js";
import createUser from "./utils.js";

export default function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()])
        .then(results => {
            const [photoResponse, userResponse] = results;
            console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
        })
        .catch(error => {
            console.log('Signup system offline');
        });
}

