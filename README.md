# SMST Scoring App

## Contributing

Clone the repository:
```
git clone https://github.com/thomasha1310/smst-scoring-app.git
cd smst-scoring-app
```

Install packages:
```
npm install
```

Create a `.env.local` file in the repository root, containing the following terms:
```
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=...
```

For local testing, set `NEXTAUTH_URL=http://localhost:3000`. For production environments, use the URL where the app is deployed.

## License

This project is licensed under the [MIT license](LICENSE).
