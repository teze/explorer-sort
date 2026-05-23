# Explorer Sort - 资源管理器排序插件

[![GitHub](https://img.shields.io/badge/GitHub-teze/explorer--sort-blue)](https://github.com/teze/explorer-sort)
[![Version](https://img.shields.io/badge/version-1.0.0-green)](https://github.com/teze/explorer-sort/releases/tag/v1.0.0)
[![License](https://img.shields.io/badge/license-MIT-orange)](LICENSE)

一个功能强大的 VS Code 资源管理器文件排序插件，提供多种排序方式和直观的用户界面。

## 功能特性

- 🎯 **一键排序**: 在资源管理器工具栏点击排序图标，快速切换排序方式
- 📁 **多种排序方式**:
  - 默认排序（VS Code 原生）
  - 按名称排序
  - 按类型排序
  - 按大小排序
  - 按修改时间排序
  - 按创建时间排序
- 💾 **状态持久化**: 排序设置自动保存，重启后保持
- 🔄 **多工作区支持**: 不同工作区可以有独立的排序设置
- ⚡ **高性能**: 快速响应，不阻塞 UI

## 使用方法

1. 在资源管理器工具栏找到排序图标（箭头交换图标）
2. 点击图标打开排序菜单
3. 选择你需要的排序方式
4. 资源管理器会立即应用新的排序

## 快捷命令

你也可以通过命令面板（Ctrl+Shift+P / Cmd+Shift+P）使用以下命令：

- `Explorer Sort: 文件排序` - 打开排序菜单
- `Explorer Sort: 按名称排序`
- `Explorer Sort: 按类型排序`
- `Explorer Sort: 按大小排序`
- `Explorer Sort: 按修改时间排序`
- `Explorer Sort: 按创建时间排序`
- `Explorer Sort: 默认排序`

## 配置选项

在设置中可以配置以下选项：

```json
{
  "explorerSort.currentSortType": "default",
  "explorerSort.foldersFirst": true
}
```

- `explorerSort.currentSortType`: 当前排序类型
- `explorerSort.foldersFirst`: 是否文件夹优先显示

## 注意事项

- **按大小排序**: VS Code 原生不支持按文件大小排序，插件会切换到文件优先模式
- **按创建时间排序**: VS Code 原生不支持按创建时间排序，插件会使用修改时间作为替代

## 开发

```bash
# 安装依赖
npm install

# 编译
npm run compile

# 监听模式
npm run watch

# 打包
vsce package
```

## 许可证

MIT

## 作者

Fooyou  foyou0@gmail.com

## 链接

- **GitHub**: https://github.com/teze/explorer-sort
- **问题反馈**: https://github.com/teze/explorer-sort/issues
- **发布页面**: https://github.com/teze/explorer-sort/releases

## 反馈

如有问题或建议，欢迎提交 Issue。
