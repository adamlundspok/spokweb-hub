(function (window) {
    window.__SpokEnv = window.__SpokEnv || {};
    let url = "https://local.spokci.com";  // this gets rewritten per environment by start.sh
    let appUrl = "web-messaging";

    window.__SpokEnv.oidc = {
        authority: `${url}/identity`,
        redirect_uri: `${url}/${appUrl}/`,
        post_logout_redirect_uri: `${url}/${appUrl}/`,
        response_type: `id_token token`,
        scope: `openid profile messaging.server`,
        client_id: `messaging.web.client`
    };

    window.__SpokEnv.messagingWebClient = {
        enableConsoleLogging: url.indexOf("local.spokci.com") > -1 ? true : false
    };

    window.__SpokEnv.messagingApi = {
        root: `${url}/messaging`,
        search: `${url}/messaging/api/v1/Search`,
        configEndpoint: `${url}/messaging/api/v1/Configuration/EndpointInfo`,
        featureFlags: `${url}/messaging/api/v1/profile/Features`
    };

    // TODO update once messaging API exposes profile
    window.__SpokEnv.profileApi = {
        root: `${url}/Profile/`,
        users: `${url}/Profile/v1/Users/`
    };
})(window);

//TODO might not want this to be an IIFE so that it is easier to test... investigate later...