# Install

When I first enter in npm, I don't understand this system.

So I want to share some kind of mistake for anyone.

```cmd
1. Clone

git clone https://github.com/unchaptered/express-web project_name
npx degit unchaptered/express-web proejct_name

2. Install

npm install
```

## Issues

### npm audit fix

I guess, you know and use this command in habitaully.

- Scan your project for vulnerabilities and automatically install any compatible updates to vulnerable dependencies [Official Docs](https://docs.npmjs.com/cli/v8/commands/npm-audit#examples)

Despite I agree to `vulnerabilities`, I can't suggest this command for student.

`Becuase`, sometimes, mothod is rename/depreacted while update.

`Sure`, you can fix code using officail docs.

But, if you're beginner, you don't expect `This method is deprected`.

And then, you waste many times find error.

So, I don't suggest npm audit fix while studying, If you're beginner.