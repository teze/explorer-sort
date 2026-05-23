# Git 使用指南

## 当前状态

- **分支**: main
- **提交**: 1 个
- **作者**: Fooyou <foyou0@gmail.com>

## 常用命令

### 查看状态

```bash
# 查看工作区状态
git status

# 查看提交历史
git log --oneline

# 查看详细提交历史
git log --graph --oneline --all
```

### 提交更改

```bash
# 添加文件到暂存区
git add <文件名>

# 添加所有更改
git add .

# 提交
git commit -m "提交信息"
```

### 分支管理

```bash
# 查看所有分支
git branch -a

# 创建新分支
git branch <分支名>

# 切换分支
git checkout <分支名>

# 创建并切换到新分支
git checkout -b <分支名>
```

### 远程仓库

```bash
# 添加远程仓库
git remote add origin <仓库地址>

# 查看远程仓库
git remote -v

# 推送到远程
git push -u origin main

# 拉取更新
git pull origin main
```

## 推荐工作流

### 1. 开发新功能

```bash
# 创建功能分支
git checkout -b feature/新功能名称

# 开发并提交
git add .
git commit -m "新增: 功能描述"

# 合并回主分支
git checkout main
git merge feature/新功能名称
```

### 2. 修复 Bug

```bash
# 创建修复分支
git checkout -b fix/bug描述

# 修复并提交
git add .
git commit -m "修复: bug描述"

# 合并回主分支
git checkout main
git merge fix/bug描述
```

### 3. 发布版本

```bash
# 创建标签
git tag -a v1.0.0 -m "版本 1.0.0"

# 推送标签
git push origin v1.0.0

# 查看所有标签
git tag -l
```

## 提交信息规范

使用中文提交信息，格式：

```
类型: 简短描述

详细说明（可选）
```

### 类型

- **新增**: 添加新功能
- **修复**: 修复 bug
- **重构**: 代码重构
- **文档**: 文档更新
- **测试**: 测试相关
- **构建**: 构建系统或依赖更新
- **性能**: 性能优化

### 示例

```bash
git commit -m "新增: 按文件大小排序功能"

git commit -m "修复: 排序图标不显示的问题"

git commit -m "文档: 更新 README 使用说明"
```

## 忽略文件

已配置 `.gitignore`，以下文件/目录会被忽略：

- `out/` - 编译输出
- `node_modules/` - 依赖包
- `.vscode-test/` - 测试文件
- `*.vsix` - 打包文件
- `.DS_Store` - macOS 系统文件

## 下一步

### 连接到 GitHub

```bash
# 在 GitHub 创建仓库后
git remote add origin https://github.com/fooyou/explorer-sort.git
git push -u origin main
```

### 创建 .github 工作流

可以添加 GitHub Actions 进行自动化：
- 自动测试
- 自动发布
- 代码检查

---

**当前提交**: 6817ad2  
**最后更新**: 2026-05-23
