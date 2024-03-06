// 0-promise.js

// This function simulates an asynchronous API call
export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulate an API call that resolves after 1 second
        setTimeout(() => {
            resolve("Response from API");
        }, 1000);
    });
}
