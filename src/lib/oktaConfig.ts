export const oktaConfig = {
    clientId: '0oapawaax8OcWr8925d7',
    issuer: 'https://dev-83813497.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: true, // Set to true only for local development without HTTPS
    // issuer: 'https://dev-133337.okta.com/oauth2/default',
    // clientId: '0oa4c6iyub2OB9IDM5d7',
    // redirectUri: window.location.origin + '/login/callback'
};
