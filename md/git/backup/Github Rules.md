# Github Rules

This document is writtend by _2022-04-01_.

## Branch List

| name | purpose |
| :---: | :----- |
| main | Deploy to netlify |
| develop | Develop or Fix system |
| test | Testing new modules |

## Git Commands

**Check out, these Git Commands**

1. Branches
2. Naming

### Tags

```javascript
git tag // check all tags

git tag "tag_name" // tagging on HEAD in local
git push --tags // push all tags from local to origin repo

git tag -d "tag_name" // delete tag by tag_name in local
git push origin --delete "tag_name" // delete tag by tag_name in origin
```

### Branches

```javascript
// Check commit and branch

git branch // check branch, using now.
git branch -r // check branch, using in repo now.
git branch -v // check last commit message in branch, using now.

// Create and Delete branch in loacl and repo

git branch branch_name // create branch
git branch -d branch_name // delete branch
git branch -D branch_anem // delete brnach with forced,

git push origin --delete branch_name // delete branch in repo

git push -u origin branch_name // push branch data to repo

// Using branch

git switch branch_name // switch branch

// Restore

git restore // Restore unstaged files
git restore --staged // Resotre staged files

// Merge : "git merge" foward to HEAD, so, first you checkout HEAD

git checkout main
git merge branch_name
git branch -d branch_name
git push origin branch_name
```
[Merge Seperated Branches](https://backlog.com/git-tutorial/kr/stepup/stepup2_4.html#:~:text=%EB%B8%8C%EB%9E%9C%EC%B9%98%20%EB%B3%91%ED%95%A9%EC%9D%80%20merge%20%EB%AA%85%EB%A0%B9%EC%96%B4,%EB%B8%8C%EB%9E%9C%EC%B9%98%EC%97%90%20%EC%9C%84%EC%B9%98%ED%95%98%EA%B2%8C%20%EB%90%A9%EB%8B%88%EB%8B%A4.)

### Naming

| Commit | Detailes |
| :----- | :-------- |
| TEST | Test branches or etc ... |
| INITIAL | Initial settings |
| MARKDOWN ADD,DEL,FIX | ADD~FIX MARKDOWN |
| ADD function | Typed detials about function with updated date |
| DEL function | Typed detials about function with updated date |
| FIX function | Typed detials about function with updated date |
| Ver.1.0.0 | Version means release version for netlify |
