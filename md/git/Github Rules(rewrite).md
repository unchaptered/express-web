# Github Rules(rewrite)

This docs is created by https://github.com/unchaptered/Github-Guideline.


| Title | Description |
| :---: | :---------- |
| Naming | How can I write `commit naming`? |
| Basic | How can I use `basic git command`? |
| Tags | How can I use tags for `relaese` |
| Branches | How can I use braches for `co-op` / `stability`? |

## Naming

```cmd
0. Merge/Relase
    git commit -m "Project_name" -m "Update List / Description";

1. Develope
    git commit -m "ADD *.js"
    git commit -m "RENAME *.js to **.js"
    git commit -m "FIX *.js for title" -m "why are you fixing this file?"

    git commit -m "DEL *.js"
    git commit -m "DEPRECATED *.js for title" -m "why are you choose this file to deprecated?"

2. Test
    git commit -m "ADD/TEST *.test.js"
    git commit -m "RENAME/TEST *.test.js to **.test.js"
    git commit -m "FIX/TEST *.test.js" -m "why are you fixing this file?"

    git commit -m "DEL/TEST *.test.js"
    git commit -m "DEPRECATED/TEST *.js for title" -m "why are you choose this file to deprecated?"
```

## Basic

```cmd
1. Start
    git init                            // You can use this folder for git
    git remote add origin repo_url.git  // Connect from local to repo
    git fetch                           // Pull commit in repo to local
    git pull                            // Pull files in repo to local

2. Push Commit
    git add .           // You focus all files for commit.
    git add filrname    // You foucs single file for commit.

    git commit -m "Commit Title" -m "Commit Description"  // title, more...

    git commit -m "Commit Title' -m "Commit Description

    1. oh yes
    2. cheese
    3. burger"                                            // title, more...
```

## Tags

```cmd
1. get list
    git tag

2. add/del tag
    git tag "tag_name"      // add tag in local
    git tag -d "tag_name"   // del tag in repo, from local

3. push/delete tags
    git push --tags                     // add tag in local
    git push origin --delete "tag_name" // del tag in repo, from local
```

## Branches

```cmd
1. get list
    git branch
    git branch -v   // get list in local
    git branch -r   // get list in origin repo

2. add/del branches
    git branch branch_name      // add branch in local
    git branch -d branch_name   // del branch in local
    git branch -D branch_name   // del branch in local

    git push orgiin branch_name     // add branch in repo, from local
    git push --delete branch_name   // del branch in repo, from local

3. switch branch
    git switch branch_name          // switch branch in local
    
5. ?
    git restore                     // Restore unstaged files in local
    git restore --staged            // Restore unstaged files in local
```