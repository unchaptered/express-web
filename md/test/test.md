# test

When I first try to write the test code, I don't know nothing.

So I want to share some kind of mistake for anyone.

| Title | Description |
| :---: | :---------- |
| Mistake | The parts that we might miss |
| Settings | Prepares... |
| Usage | Techniques... |

<hr>

## Mistake

### requre / import

`Node.js` has two kind of module system about commonjs/module.

And you can decide `which system to use` by adding this options in `package.json`.

```json
{
  "type": "module" or "commonjs"
}
```

But, some module doesn't support `module` options.

When you want to use ECMAScript or `module` in jest, you adding can choice `experimental  options` while run jest.

```cmd
node --experimental-vm-modules node_modules/jest/bin/jest.js
```

But, this option can make some trouble.... such as jest.fn() is not defined();

If you want to use import, you need to compile from import to require.

<hr>

## Settings

Prepared...

<hr>

## Techniques

Prepared...