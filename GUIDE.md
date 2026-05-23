# Explorer Sort 插件使用指南

## 快速开始

### 1. 测试插件

在 VS Code 中打开此项目，按 F5 启动调试。这会打开一个新的 VS Code 窗口（扩展开发主机），插件已在其中激活。

### 2. 使用排序功能

1. 在扩展开发主机窗口中，打开任意文件夹
2. 查看资源管理器工具栏，你会看到一个排序图标（箭头交换图标）
3. 点击图标，选择排序方式
4. 资源管理器会立即应用新的排序

### 3. 命令面板使用

按 `Ctrl+Shift+P` (Windows/Linux) 或 `Cmd+Shift+P` (Mac)，输入 "Explorer Sort" 查看所有可用命令。

## 功能说明

### 支持的排序方式

1. **默认排序**: VS Code 原生排序行为
2. **按名称排序**: 按文件名字母顺序排序
3. **按类型排序**: 按文件扩展名分组排序
4. **按修改时间排序**: 最近修改的文件排在前面
5. **按大小排序**: 按文件大小排序（注意：VS Code 原生不完全支持）
6. **按创建时间排序**: 按创建时间排序（注意：VS Code 原生不完全支持）

### 配置选项

在 VS Code 设置中搜索 "Explorer Sort" 可以找到以下配置：

- `explorerSort.currentSortType`: 当前使用的排序类型
- `explorerSort.foldersFirst`: 是否文件夹优先显示

### 工作区支持

插件会为每个工作区保存独立的排序设置。当你切换工作区时，会自动恢复该工作区的排序方式。

## 开发说明

### 项目结构

```
explorer-sort/
├── src/
│   └── extension.ts          # 主扩展代码
├── out/                       # 编译输出目录
├── package.json              # 扩展清单
├── tsconfig.json             # TypeScript 配置
└── README.md                 # 项目说明
```

### 构建命令

```bash
# 编译
npm run compile

# 监听模式（自动重新编译）
npm run watch

# 代码检查
npm run lint
```

### 调试

1. 在 VS Code 中打开项目
2. 按 F5 或点击"运行和调试"
3. 选择"运行扩展"配置
4. 在新窗口中测试插件功能

### 打包发布

```bash
# 安装 vsce（如果还没安装）
npm install -g @vscode/vsce

# 打包成 .vsix 文件
vsce package

# 发布到市场（需要先配置发布者账号）
vsce publish
```

## 技术实现

### VS Code API 使用

插件主要使用以下 VS Code API：

1. **配置管理**: `vscode.workspace.getConfiguration()`
2. **命令注册**: `vscode.commands.registerCommand()`
3. **快速选择**: `vscode.window.showQuickPick()`
4. **通知**: `vscode.window.showInformationMessage()`

### 排序实现

插件通过修改 VS Code 的 `files.sortOrder` 配置来实现排序：

- `default`: 默认排序
- `alphabetical`: 按名称排序
- `type`: 按类型排序
- `modified`: 按修改时间排序
- `filesFirst`: 文件优先（用于模拟按大小排序）

### 状态持久化

排序状态保存在工作区配置中（`.vscode/settings.json`），确保重启后保持。

## 限制说明

由于 VS Code 原生 API 的限制：

1. **按大小排序**: VS Code 不支持按文件大小排序，插件使用"文件优先"模式作为替代
2. **按创建时间排序**: VS Code 不支持按创建时间排序，插件使用"修改时间"作为替代

如需完全自定义的排序功能，需要实现自定义的文件树视图，这会更复杂但功能更强大。

## 故障排除

### 排序不生效

1. 检查是否在正确的工作区
2. 尝试重新加载窗口（Ctrl+R / Cmd+R）
3. 查看开发者工具控制台是否有错误信息

### 图标不显示

1. 确保 VS Code 版本 >= 1.80.0
2. 检查资源管理器是否已打开
3. 尝试重启扩展开发主机

### 设置不保存

1. 检查工作区是否有写入权限
2. 查看 `.vscode/settings.json` 文件是否存在
3. 尝试手动创建 `.vscode` 目录

## 未来改进

可能的功能增强：

1. 实现真正的按大小排序（需要自定义树视图）
2. 实现真正的按创建时间排序
3. 添加升序/降序切换
4. 支持自定义排序规则
5. 添加排序历史记录
6. 支持文件夹内容递归排序

## 贡献

欢迎提交 Issue 和 Pull Request！
