# Git

版本管理工具，

## 常用命令

1、代码提交
git add .
git commit -m "add createcomponent"



2、再切换回开发分支
git checkout dev



3、分支合并
```
git merge 分支名 --no-ff
```
--no-ff 会将合并记录添加到git log当中



4、git log
Merge: 035d0b2 b9d9034
Author: gangking <gangking@foxmail.com>
Date:   Sat Aug 10 18:06:42 2019 +0800

    Merge branch 'createcomponents' into dev

commit b9d90342edf7bdaee662519e3d899e796bd72e98 (createcomponents)
Author: gangking <gangking@foxmail.com>
Date:   Sat Aug 10 18:02:34 2019 +0800

    add reatecomponnet
说明合并成功！

5、提交到远程仓库
git push origin dev



6、删除分支
git branch -d createcomponents



7、查看当前分支
git branch



8、创建分支：

git checkout -b createcomponents



技巧：

1、退出vm模式

```
esc+shift+;再输入wq!回车即可
```

2、当Pull报错，除了使用git stash还可以：

```
- 先通过 git log 查看最近提交的版本Id
- 再通过 git reset --soft 版本id  来回退到最近提交版本
```

3、更新代码冲突时

```
- 先通过git stash暂存
- 在git pull项目
- 再释放stash 
```



## 常用git stash命令

```
（1）git stash save "save message"  : 执行存储时，添加备注，方便查找，只有git stash 也要可以的，但查找时不方便识别。

（2）git stash list  ：查看stash了哪些存储

（3）git stash show ：显示做了哪些改动，默认show第一个存储,如果要显示其他存贮，后面加stash@{$num}，比如第二个 git stash show stash@{1}

（4）git stash show -p : 显示第一个存储的改动，如果想显示其他存存储，命令：git stash show  stash@{$num}  -p ，比如第二个：git stash show  stash@{1}  -p

（5）git stash apply :应用某个存储,但不会把存储从存储列表中删除，默认使用第一个存储,即stash@{0}，如果要使用其他个，git stash apply stash@{$num} ， 比如第二个：git stash apply stash@{1} 

（6）git stash pop ：命令恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下,默认为第一个stash,即stash@{0}，如果要应用并删除其他stash，命令：git stash pop stash@{$num} ，比如应用并删除第二个：git stash pop stash@{1}

（7）git stash drop stash@{$num} ：丢弃stash@{$num}存储，从列表中删除这个存储

（8）git stash clear ：删除所有缓存的stash
```



## 取消暂存

1、git checkout — //未git add的文件

2、git reset HEAD //已经git add的文件，可以用这个取消add，然后用上一条命令恢复

3、git reset –hard HEAD //把全部更改的文件都恢复（小心使用，不然辛辛苦苦写的全没了）

------

> git reset HEAD 可以全部恢复未提交状态

 

 

 



# SVN

[使用方法](https://jingyan.baidu.com/article/6c67b1d6f524d52787bb1ef3.html)

[TortoiseSVN安装和使用](https://www.cnblogs.com/lijingbo/p/9116717.html)

