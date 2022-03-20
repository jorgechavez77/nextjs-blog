const { Amplify, Auth } = require("aws-amplify")

Amplify.configure({
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_foobar",
    userPoolWebClientId: "foobar",
    oauth: {
      domain: "dev123",
      scope: [
        "phone",
        "email",
        "profile",
        "openid",
        "aws.cognito.signin.user.admin",
      ],
      redirectSignIn: "http://localhost:3000/",
      redirectSignOut: "http://localhost:3000/",
      responseType: "code",
    },
  },
})
