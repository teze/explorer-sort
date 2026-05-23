# 快速参考

## 🚀 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 编译项目
npm run compile

# 3. 在 VS Code 中按 F5 启动调试
```

## 📋 常用命令

| 命令 | 说明 |
|------|------|
| `npm install` | 安装依赖 |
| `npm run compile` | 编译 TypeScript |
| `npm run watch` | 监听模式（自动编译） |
| `npm run lint` | 代码检查 |
| `./dev.sh` | 交互式开发脚本 |

## 🎯 插件功能

| 排序方式 | 说明 | 支持状态 |
|---------|------|---------|
| 默认排序 | VS Code 原生排序 | ✅ 完全支持 |
| 按名称排序 | 字母顺序 | ✅ 完全支持 |
| 按类型排序 | 按扩展名分组 | ✅ 完全支持 |
| 按修改时间排序 | 最近修改优先 | ✅ 完全支持 |
| 按大小排序 | 按文件大小 | ⚠️ 有限支持 |
| 按创建时间排序 | 按创建时间 | ⚠️ 有限支持 |

## 🔧 VS Code 命令

在命令面板 (Ctrl+Shift+P / Cmd+Shift+P) 中输入:

- `Explorer Sort: 文件排序` - 打开排序菜单
- `Explorer Sort: 按名称排序`
- `Explorer Sort: 按类型排序`
- `Explorer Sort: 按大小排序`
- `Explorer Sort: 按修改时间排序`
- `Explorer Sort: 按创建时间排序`
- `Explorer Sort: 默认排序`

## 📁 项目结构

```
explorer-sort/
├── src/extension.ts      # 主代码
├── out/                  # 编译输出
├── package.json          # 扩展清单
├── README.md            # 项目说明
├── GUIDE.md             # 详细指南
└── TEST.md              # 测试清单
```

## 🐛 调试

1. 在 VS Code 中打开项目
2. 按 **F5** 启动扩展开发主机
3. 在新窗口中测试插件
4. 查看调试控制台的日志

## 📦 打包发布

```bash
# 安装 vsce
npm install -g @vscode/vsce

# 打包
vsce package

# 发布
vsce publish
```

## ⚙️ 配置选项

在 VS Code 设置中:

```json
{
  "explorerSort.currentSortType": "default",
  "explorerSort.foldersFirst": true
}
```

## 🔗 相关文档

- [README.md](README.md) - 项目说明
- [GUIDE.md](GUIDE.md) - 详细使用指南
- [TEST.md](TEST.md) - 测试清单
- [PROJECT.md](PROJECT.md) - 项目总结
- [CHANGELOG.md](CHANGELOG.md) - 版本历史

## 💡 提示

- 排序设置会自动保存到工作区
- 不同工作区可以有不同的排序设置
- 重启 VS Code 后排序设置会自动恢复
- 按大小和创建时间排序受 VS Code API 限制

## 🆘 故障排除

| 问题 | 解决方案 |
|------|---------|
| 图标不显示 | 确保在资源管理器视图中 |
| 排序不生效 | 尝试重新加载窗口 (Ctrl+R) |
| 编译失败 | 删除 node_modules 重新安装 |
| 设置不保存 | 检查工作区写入权限 |

## 📞 获取帮助

- 查看 [GUIDE.md](GUIDE.md) 了解详细使用方法
- 查看 [TEST.md](TEST.md) 了解测试方法
- 提交 Issue 报告问题

---

**版本**: 1.0.0  
**更新**: 2026-05-23
