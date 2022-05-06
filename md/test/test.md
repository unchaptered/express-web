# test

When I first try to write the test code, I don't know nothing.

So I want to share some kind of mistake for anyone.

| Title | Description |
| :---: | :---------- |
| Principle | The principle to writing test code |
| Mistake | The parts that we might miss |
| Settings | Prepares... |
| Usage | Techniques... |

<hr>

## Principle

1. Testing shows `wrong point` in process.
2. All testing is `imperfect`, can't be prefect.
3. Early testing save time/mony.
4. A few module contain `most wrong point`.
5. Periodically/Regullary check test code, and then, `add/del test code`
6. Testing is  written for `Business Logic`, not for `Find error`

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